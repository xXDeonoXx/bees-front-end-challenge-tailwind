import type { NextPage } from 'next';
import LoginForm from '../components/Molecules/LoginForm';

const Home: NextPage = () => {
  return (
    <div className='bg-primary w-screen h-screen flex justify-center items-center'>
      <LoginForm />
      <div className='absolute left-8 bottom-4'>
        <img src='images/bee-logo.svg' alt='Bee Logo' />
      </div>
    </div>
  );
};

export default Home;
