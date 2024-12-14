import NextAuth from 'next-auth';
import Credential from 'next-auth/providers/credentials';
import Facebook from 'next-auth/providers/facebook';

export const { auth, handlers, signIn, signOut, unstable_update } = NextAuth({
  providers: [
    Credential({
      async authorize(credentials) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials),
        });

        if (!res.ok) {
          throw new Error('Invalid credentials');
        }

        const user = await res.json();
        if (user) {
          user.role = 'user';
          user.isOnboarded = user.user.is_onboarded;
          user.name = user.user.full_name || user.user.email.split('@')[0];
          user.email = user.user.email;
          return user; // Must return an object with at least `id` or `email`
        }

        return null; // Return null if login fails
      },
    }),
    Facebook({
      clientId: process.env.NEXTAUTH_FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.NEXTAUTH_FACEBOOK_CLIENT_SECRET || '',
      authorization: {
        params: {
          scope: 'email, public_profile,  ',
          // pages_show_list  pages_read_engagement, pages_manage_metadata
        },
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'credentials') return true;

      const loginType = account?.provider;

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/social-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          name: user.name,
          login_type: loginType, // Send 'google' or 'linkedin'
        }),
      });

      if (res.ok) {
        const _user = await res.json();
        user.access_token = _user.access_token;
        user.role = 'user';
        user.name = _user.user.full_name || _user.user.email.split('@')[0];
        user.email = _user.user.email;

        return true;
      } else {
        return false;
      }

      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.accessToken = user.access_token;
        token.isOnboarded = user.isOnboarded;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub;
        session.user.role = token.role;
        session.user.accessToken = token.accessToken;
        session.user.isOnboarded = token.isOnboarded;
        session.user.name = token.name;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
  session: { strategy: 'jwt', maxAge: 24 * 60 * 60 }, // 1 day in seconds
  jwt: {
    maxAge: 24 * 60 * 60, // 1 day in seconds
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
});
