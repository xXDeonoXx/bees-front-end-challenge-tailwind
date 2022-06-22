import type { NextPage } from 'next';
import LoginForm from '../components/Molecules/LoginForm';
import { useUser } from '../providers/User';

const Home: NextPage = () => {
  return (
    <main className='bg-primary w-screen h-screen flex justify-center items-center'>
      <LoginForm />
      <div className='absolute left-8 bottom-4'>
        <img src='images/bee-logo.svg' alt='Bee Logo' />
      </div>
    </main>
  );
};

export default Home;
