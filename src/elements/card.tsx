import classNames from 'classnames';
import { PropsWithChildren } from 'react';

export const Card = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={classNames(
        'rounded-xl bg-gray-100 shadow-xl overflow-hidden max-w-screen-lg',
        className
      )}
    >
      {children}
    </div>
  );
};
