import HomeHeader from '@/components/headers/home-header';

import { useDrawer } from '@/context/DrawerContext';

const Home = () => {
  const { toggleDrawer } = useDrawer();
  return (
    <>
      <HomeHeader toggleDrawer={toggleDrawer} />
      <div>원티드 프리온보딩 더블엔씨 과제</div>;
    </>
  );
};

export default Home;
