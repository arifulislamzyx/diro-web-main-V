'use client';

import { useMemo, useState } from 'react';
import { DM_Serif_Display } from 'next/font/google';

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
// import Logo from '@/assets/icons/logo.svg';
import { ROUTES } from '@/routes';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { UserProfile } from '../user-profile';

const font = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
});

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session } = useSession();

  const isLoggedIn = !!session;

  console.log(session);

  const onMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = (provider: 'facebook' | 'google') => {
    signIn(provider, {
      callbackUrl: ROUTES.HOMEPAGE,
    });
  };

  const hadnleLogout = () => {
    signOut({
      callbackUrl: ROUTES.HOMEPAGE,
    });
  };

  const Icon = useMemo(() => (isMenuOpen ? IoMdClose : GiHamburgerMenu), [isMenuOpen]);
  return (
    <header className="py-5 px-2 md:px-10 flex justify-between items-center gap-x-4">
      <Link href={ROUTES.HOMEPAGE}>
        {/* <Logo /> */}
        <div className={cn('text-3xl text-body', font.className)}>Diro</div>
      </Link>
      <div
        className={cn(
          'duration-500 md:static absolute bg-white md:min-h-fit min-h-[100vh] left-0 top-[-100%] md:w-auto w-full flex md:flex-row flex-col px-5 z-10',
          isMenuOpen && 'top-[9%]'
        )}
      >
        <ul className="flex mt-4 md:mt-0 md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li className="p-2 transition hover:opacity-60">
            <Link href={ROUTES.PRICING}>Pricing</Link>
          </li>
          <li className="p-2 transition hover:opacity-60">
            <Link href={ROUTES.ABOUT}>About</Link>
          </li>
          <li className="p-2 transition hover:opacity-60">
            <Link href={ROUTES.SUPPORT}>Support</Link>
          </li>
          <li className="p-2 transition hover:opacity-60">
            <Link href={ROUTES.BLOG}>Blog</Link>
          </li>
        </ul>
        <div className="gap-x-6 mt-6 flex md:hidden">
          <Button variant="secondary" size="md">
            Free registration
          </Button>
          <Button variant="ghost" size="md">
            Login
          </Button>
        </div>
      </div>
      <div className="gap-x-10 text-paragraph flex gap-3 items-center">
        {isLoggedIn ? (
          <div>
            <UserProfile user={session.user} />
            <Button variant={'outline'} onClick={hadnleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <Button variant="default" size="md" className="hidden md:flex px-6" onClick={() => handleLogin('facebook')}>
            Login
          </Button>
        )}
        <Icon size={24} onClick={onMenuClick} className="cursor-pointer text-primary md:hidden" />
      </div>
    </header>
  );
};

export default MainHeader;
