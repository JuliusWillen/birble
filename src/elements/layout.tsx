import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col h-screen primary-bg'>
      <TopBar />
      <Content>{children}</Content>
    </div>
  );
};

const TopBar = () => {
  return (
    <div className='flex flex-col h-16 shadow-xl justify-center'>
      <div className='text-center'>
        <h1>Birble</h1>
      </div>
    </div>
  );
};

const Content = ({ children }: { children: ReactNode }) => {
  return <div className='size-full p-5'>{children}</div>;
};
