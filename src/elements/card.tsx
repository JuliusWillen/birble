import { ReactNode } from 'react';

export const Card = ({ children }: { children: ReactNode }) => {
  return <div className='rounded-xl shadow-xl bg-white w-fit overflow-hidden'>{children}</div>;
};
