import { faKiwiBird } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <>
      <div className='flex h-16 shadow-xl justify-center items-center gap-5'>
        <div className='text-center'>
          <h1>Birble</h1>
        </div>
        <FontAwesomeIcon icon={faKiwiBird} className='text-white size-10' />
      </div>
    </>
  );
};

const Content = ({ children }: { children: ReactNode }) => {
  return <div className='flex flex-col flex-grow overflow-auto p-5'>{children}</div>;
};
