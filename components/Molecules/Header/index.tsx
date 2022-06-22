import React from 'react';
import { useUser } from '../../../providers/User';
import GoBackButton from '../../atoms/GoBackButton';

const Header = () => {
  const { user } = useUser();

  return (
    <div className='bg-primary w-full h-[4.5rem] flex items-center justify-between'>
      <div className='flex items-center ml-5'>
        <GoBackButton />
        <span className='ml-4 text-3xl pointer-events-none select-none'>
          Go back
        </span>
      </div>
      <span className='mr-10 text-3xl'>{user?.name}</span>
    </div>
  );
};

export default Header;
