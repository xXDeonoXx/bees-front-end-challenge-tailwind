import {
  ChartSquareBarIcon,
  LocationMarkerIcon,
  PhoneIcon,
  PlusCircleIcon,
} from '@heroicons/react/outline';
import { Brewery } from '../../../services/breweries/breweries.interface';
import CardChip from '../../atoms/CardChip';

interface BreweryCardProps {
  brewery: Brewery;
}

const BreweryCard: React.FC<BreweryCardProps> = ({ brewery }) => {
  const address =
    brewery.street || brewery.address_2 || brewery.address_3 || undefined;
  console.log(typeof address);
  return (
    <div className='border border-black bg-white w-[23rem] h-72 rounded px-6 py-7 flex flex-col'>
      <p className='text-gray-800 font-bold text-xl mb-5'>{brewery.name}</p>
      <p className='w-full text-gray-700 h-14 mb-6'>
        {typeof address == 'string' ? address : ''}
        {brewery.state &&
          `${typeof address == 'string' ? ', ' : ''} ${brewery.state}`}
        {brewery.country && ` - ${brewery.country}`}
      </p>
      <div className='w-full flex flex-wrap gap-x-4 gap-y-7'>
        {brewery.brewery_type && (
          <CardChip
            label={brewery.brewery_type}
            icon={<ChartSquareBarIcon />}
          />
        )}
        {brewery.postal_code && (
          <CardChip label={brewery.postal_code} icon={<LocationMarkerIcon />} />
        )}
        {brewery.phone && (
          <CardChip label={brewery.phone} icon={<PhoneIcon />} />
        )}
        <CardChip label={'add more'} icon={<PlusCircleIcon />} />
      </div>
    </div>
  );
};

export default BreweryCard;
