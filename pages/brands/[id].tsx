import type { GetServerSideProps, NextPage } from "next";
import ItemList from "@/components/item-list";
import DefaultHeader from "@/components/headers/default-header";
import { ConCategory2 } from "@/types/brand";
import { useRouter } from "next/router";

interface BrandsItemProps {
  brandItem: ConCategory2;
}

const BrandsItem: NextPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <DefaultHeader />
      {/*<ItemList brandItem={brandItem} />*/}
    </>
  );
};

export default BrandsItem;
