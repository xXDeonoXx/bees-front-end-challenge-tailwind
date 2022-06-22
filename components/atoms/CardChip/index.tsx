import React from 'react';

interface CardChipProps {
  label: string;
  icon?: React.ReactNode;
}

const CardChip: React.FC<CardChipProps> = ({ label, icon }) => {
  return (
    <div className='bg-primary rounded-xl flex px-2 py-1 min-w-[8rem] items-center'>
      {icon && <div className='h-6 w-6 mr-2'>{icon}</div>}
      {label}
    </div>
  );
};

export default CardChip;
