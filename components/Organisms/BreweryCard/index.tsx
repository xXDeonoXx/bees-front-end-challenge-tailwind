import React from 'react';
import CardChip from '../../atoms/CardChip';
import {
  ChartSquareBarIcon,
  LocationMarkerIcon,
  PhoneIcon,
  PlusCircleIcon,
} from '@heroicons/react/outline';

const BreweryCard = () => {
  return (
    <div className='border border-black bg-white w-[23rem] h-72 rounded px-6 py-7 flex flex-col'>
      <p className='text-gray-800 font-bold text-xl mb-5'>
        10-56 Brewing Company
      </p>
      <p className='w-full text-gray-700 h-14 mb-6'>
        400 Brown Cir Knox, Indiana - United States
      </p>
      <div className='w-full flex flex-wrap gap-x-4 gap-y-7'>
        <CardChip label={'micro'} icon={<ChartSquareBarIcon />} />
        <CardChip label={'46534'} icon={<LocationMarkerIcon />} />
        <CardChip label={'6308165790'} icon={<PhoneIcon />} />
        <CardChip label={'add more'} icon={<PlusCircleIcon />} />
      </div>
    </div>
  );
};

export default BreweryCard;
