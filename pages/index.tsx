import HomeHeader from "@/components/headers/home-header";
import Main from "@/components/main";

import { useDrawer } from "@/context/DrawerContext";
import { getSaleItem } from "@/lib/home-api";
import { SaleItemType } from "@/types/saleItem";
import { GetServerSideProps, NextPage } from "next";

interface SaleItemProps {
  conItems: SaleItemType[];
}

const Home: NextPage<SaleItemProps> = ({ conItems }: SaleItemProps) => {
  const { toggleDrawer } = useDrawer();
  return (
    <>
      <HomeHeader toggleDrawer={toggleDrawer} />
      <Main conItems={conItems} />;
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await getSaleItem();
    console.log(data);
    return {
      props: { conItems: data.conItems },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default Home;
