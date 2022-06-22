import type { NextPage } from 'next';
import Header from '../components/Molecules/Header';
import BreweryCard from '../components/Organisms/BreweryCard';

const BreweryListPage: NextPage = () => {
  return (
    <main className='bg-[#FFFEF0] w-screen h-screen flex flex-col items-center'>
      <Header />
      <div className='flex justify-center flex-wrap gap-12 mt-24'>
        <BreweryCard />
        <BreweryCard />
        <BreweryCard />
        <BreweryCard />
        <BreweryCard />
        <BreweryCard />
      </div>
    </main>
  );
};

export default BreweryListPage;
