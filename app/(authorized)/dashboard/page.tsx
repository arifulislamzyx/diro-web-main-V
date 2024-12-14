'use client';

import { Button } from '@/components/ui/button';
import { signIn, useSession } from 'next-auth/react';
import { useCallback } from 'react';

export default function DashboardPage() {
  const { data: session } = useSession();

  const handleConnectFacebook = useCallback(() => {
    signIn('facebook', {
      callbackUrl: '/dashboard',
      scope: 'email,pages_show_list,pages_read_engagement,pages_manage_metadata,pages_manage_posts',
    });
  }, []);

  const handleGetPages = useCallback(async () => {
    if (!session?.user?.accessToken) return;

    try {
      const response = await fetch(
        `https://graph.facebook.com/v16.0/me/accounts?access_token=${session.user.accessToken}`
      );
      const data = await response.json();
      console.log('Facebook pages:', data);
    } catch (error) {
      console.error('Error fetching Facebook pages:', error);
    }
  }, [session?.user?.accessToken]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="space-y-4">
        <Button onClick={handleConnectFacebook}>Connect Facebook Pages</Button>

        {session?.user?.accessToken && (
          <Button onClick={handleGetPages} variant="secondary">
            Get Connected Pages
          </Button>
        )}
      </div>
    </div>
  );
}
