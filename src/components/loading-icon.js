import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

export default function LoadingIcon({ className }) {
  return <Logo className={cn('h-[2em] w-[2em] animate-pulse', className)} />;
}
