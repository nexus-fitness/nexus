import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';
import { useWindowSize } from 'react-use';

import { Lockup } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { SheetTrigger } from '@/components/ui/sheet';

const contentAtom = atomWithReset(null);
const titleAtom = atomWithReset(null);

export function MarketingNavbar({ user }) {
  return (
    <header className='fixed top-0 left-0 right-0 md:[--header-height:48px]'>
      <div className='after:absolute after:inset-x-0 after:top-[-1px] after:-bottom-1/2 after:[mask-image:linear-gradient(to_bottom,black_var(--header-height),transparent)] after:backdrop-blur-md' />
      <nav>
        <div className='md:hidden'></div>
        <div className='[height:var(--header-height)] relative hidden md:flex container mx-auto items-center border-b'>
          <Lockup href='/' className='text-xl' />
          {Boolean(user) && (
            <Button
              href='/dashboard'
              variant='outline'
              size='sm'
              className='ml-auto'
            >
              Open App <ArrowRightIcon className='ml-2 inline-block h-4 w-4' />
            </Button>
          )}
          {!Boolean(user) && (
            <Button
              href='/waitlist'
              variant='outline'
              size='sm'
              className='ml-auto'
            >
              Waitlist
              <ArrowRightIcon className='ml-2 inline-block h-4 w-4' />
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}

export function InAppNavbar() {
  const content = useAtomValue(contentAtom);
  const title = useAtomValue(titleAtom);

  const { width } = useWindowSize();
  const isCollapsed = React.useMemo(() => width < 768, [width]);

  return (
    <header className='flex min-h-[57px] items-center justify-between border-b bg-slate-50 px-2 gap-2'>
      {isCollapsed && (
        <SheetTrigger asChild>
          <Button variant='ghost'>
            <Bars3Icon className='w-4 h-4' />
          </Button>
        </SheetTrigger>
      )}
      <div className='flex flex-1 overflow-hidden items-center text-sm'>
        {title}
      </div>
      {content}
    </header>
  );
}

function RightContent({ children }) {
  const set = useSetAtom(contentAtom);
  const reset = useResetAtom(contentAtom);

  React.useEffect(() => {
    set(children);

    return () => reset();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  return null;
}

function Title({ children }) {
  const set = useSetAtom(titleAtom);
  const reset = useResetAtom(titleAtom);

  React.useEffect(() => {
    set(children);

    return () => reset();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  return null;
}

const Navbar = {
  RightContent,
  Title,
};
export default Navbar;
