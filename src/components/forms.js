import React from 'react';
import clsx from 'clsx';

export function Label({ className, ...labelProps }) {
  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <label
      className={clsx('inline-block text-lg text-slate-500', className)}
      {...labelProps}
    />
  );
  /* eslint-enable jsx-a11y/label-has-associated-control */
}
