import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User } from 'next-auth';
import { FC } from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { LayoutDashboard, LogOut, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface UserProfileProps {
  user: Pick<User, 'name' | 'image'> & {
    full_name?: string | null;
  };
  className?: string;
}

export const UserProfile: FC<UserProfileProps> = ({ user, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const displayName = user.full_name || user.name || 'User';
  const truncatedName =
    displayName.split(' ').length > 2 ? `${displayName.split(' ')[0]} ${displayName.split(' ').pop()}` : displayName;
  const initials = truncatedName
    .split(' ')
    .map((name) => name[0])
    .join('')
    .toUpperCase();

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <div className={cn('flex items-center gap-2 cursor-pointer', className)}>
          <Avatar>
            <AvatarImage src={user.image || ''} alt={truncatedName} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <span className="font-medium">{truncatedName}</span>
          <ChevronDown
            className={cn('h-4 w-4 transition-transform duration-200 -ml-1', {
              'transform rotate-180': isOpen,
            })}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/dashboard" className="flex items-center gap-2">
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => signOut()}
          className="text-red-600 focus:text-red-600 flex items-center gap-2 cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
