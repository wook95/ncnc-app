import HomeHeader from '@/components/headers/home-header';

import { useDrawer } from '@/context/DrawerContext';

const Home = () => {
  const { toggleDrawer } = useDrawer();
  return (
    <>
      <HomeHeader toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Home;
