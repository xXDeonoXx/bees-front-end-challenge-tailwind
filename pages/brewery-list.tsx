import type { NextPage } from 'next';
import { useState } from 'react';
import Header from '../components/Molecules/Header';
import BreweryCard from '../components/Organisms/BreweryCard';
import { getApi } from '../services/api';
import { Brewery } from '../services/breweries/breweries.interface';

interface BreweryListPageProps {
  breweries: Brewery[];
}

const BreweryListPage: NextPage<BreweryListPageProps> = ({ breweries }) => {
  const [breweriesState, setBreweriesState] = useState(breweries);
  return (
    <main className='bg-[#FFFEF0] w-full min-h-screen flex flex-col items-center'>
      <Header />
      <div className='my-24 px-24 w-full h-full flex justify-center flex-wrap gap-12'>
        {breweriesState?.map((brewery) => {
          return (
            <BreweryCard
              key={brewery.id}
              brewery={brewery}
              removeBrewery={(id: string) => {
                setBreweriesState(
                  breweriesState.filter((brew) => brew.id != id)
                );
              }}
            />
          );
        })}
      </div>
    </main>
  );
};

export default BreweryListPage;

export async function getServerSideProps() {
  const api = getApi();
  const response = await api.get<Brewery[]>('/breweries');
  return {
    props: { breweries: response.data }, // will be passed to the page component as props
  };
}
