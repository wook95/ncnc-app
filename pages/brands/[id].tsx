import type { NextPage } from "next";
import ItemList from "@/components/item-list";
import DefaultHeader from "@/components/headers/default-header";
import { starbucksItem } from "constants/mock";

const BrandsItem: NextPage = () => {
  return (
    <>
      <DefaultHeader />
      <ItemList brandItem={starbucksItem} />
    </>
  );
};

export default BrandsItem;
