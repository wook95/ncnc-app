import HomeHeader from '@/components/headers/home-header';
import Main from '@/components/main';

import { useDrawer } from '@/context/DrawerContext';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const { toggleDrawer } = useDrawer();
  return (
    <>
      <HomeHeader toggleDrawer={toggleDrawer} />
      <Main />
    </>
  );
};

export default Home;
