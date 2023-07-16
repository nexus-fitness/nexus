import clsx from 'clsx';
import React from 'react';

export function ListMenu({ className, children }) {
  return (
    <ul className={clsx('flex flex-col', className)} role='tree'>
      {children}
    </ul>
  );
}
// TODO: FIX: the `divide-y` borders between list items and groups are interacting pretty wonky
export const ListMenuItem = React.forwardRef(function ListMenuItem(
  { className, onClick, children },
  ref
) {
  if (onClick)
    return (
      <li className='flex'>
        <button
          className={clsx('flex grow bg-white p-4 font-medium', className)}
          ref={ref}
          type='button'
          onClick={onClick}
        >
          {children}
        </button>
      </li>
    );

  return (
    <li className={clsx('flex items-center bg-white p-4', className)} ref={ref}>
      {children}
    </li>
  );
});

export const ListMenuTextInput = React.forwardRef(function ListMenuTextInput(
  { className, ...props },
  ref
) {
  return (
    <li className={clsx('bg-white', className)}>
      <input
        type='text'
        ref={ref}
        {...props}
        className='w-full bg-slate-100 p-4 placeholder:text-gray-500 disabled:text-gray-400'
      />
    </li>
  );
});

export function ListMenuGroup({ className, title, children }) {
  if (title) {
    return (
      <div className={clsx('flex flex-col divide-y pt-4', className)}>
        <div className='mb-2 flex text-ellipsis whitespace-nowrap px-4 text-xs font-medium uppercase'>
          {title}
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className={clsx('flex flex-col divide-y pt-4', className)}>
      {children}
    </div>
  );
}
