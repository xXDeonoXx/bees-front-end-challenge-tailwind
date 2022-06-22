import { useRouter } from 'next/router';
import React from 'react';
import { useUser } from '../../../providers/User';

const GoBackButton = () => {
  const router = useRouter();
  const { setName } = useUser();

  return (
    <div
      className='cursor-pointer'
      onClick={() => {
        setName('');
        router.back();
      }}
    >
      <img src='images/go-back-button.svg' alt='' />
    </div>
  );
};

export default GoBackButton;
