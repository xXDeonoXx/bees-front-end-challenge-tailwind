import {
  ChartSquareBarIcon,
  LocationMarkerIcon,
  PhoneIcon,
  PlusCircleIcon,
} from '@heroicons/react/outline';

import { TrashIcon } from '@heroicons/react/solid';
import { Brewery } from '../../../services/breweries/breweries.interface';
import CardChip from '../../atoms/CardChip';

interface BreweryCardProps {
  brewery: Brewery;
  removeBrewery: (id: string) => void;
}

const BreweryCard: React.FC<BreweryCardProps> = ({
  brewery,
  removeBrewery,
}) => {
  const address =
    brewery.street || brewery.address_2 || brewery.address_3 || undefined;
  return (
    <div className='outline outline-0 hover:outline-2 outline-iris-100 relative border border-black  bg-white w-[23rem] h-72 rounded px-6 py-7 flex flex-col'>
      <div
        className='w-5 absolute right-2 top-2 cursor-pointer'
        onClick={() => {
          removeBrewery(brewery.id);
        }}
      >
        <TrashIcon />
      </div>
      <p className='text-gray-800 font-bold text-xl mb-5'>{brewery.name}</p>
      <p className='w-full text-gray-700 h-14 mb-6'>
        {typeof address == 'string' ? address : ''}
        {brewery.state &&
          `${typeof address == 'string' ? ', ' : ''} ${brewery.state}`}
        {brewery.country && ` - ${brewery.country}`}
      </p>
      <div className='w-full flex flex-wrap gap-x-4 gap-y-7'>
        <CardChip label={brewery.brewery_type} icon={<ChartSquareBarIcon />} />
        <CardChip label={brewery.postal_code} icon={<LocationMarkerIcon />} />
        <CardChip label={brewery.phone} icon={<PhoneIcon />} />
        <CardChip editable label={'add more'} icon={<PlusCircleIcon />} />
      </div>
    </div>
  );
};

export default BreweryCard;
