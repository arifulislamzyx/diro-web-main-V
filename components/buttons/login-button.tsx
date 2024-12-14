'use client';

import { ROUTES } from '@/routes';
import { Button } from '../ui/button';
import { signIn } from 'next-auth/react';
import { cn } from '@/lib/utils';

const LoginButton = ({
  children,
  provider,
  className,
}: {
  children: React.ReactNode;
  provider: 'facebook';
  className?: string;
}) => {
  const handleLogin = () => {
    signIn(provider, {
      callbackUrl: ROUTES.HOMEPAGE,
    });
  };

  return (
    <Button variant="default" size="md" className={cn('hidden md:flex px-6', className)} onClick={handleLogin}>
      {children}
    </Button>
  );
};

export default LoginButton;
