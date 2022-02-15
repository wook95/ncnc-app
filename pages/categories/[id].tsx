import { GetServerSideProps, NextPage } from "next";
import Brand from "@/components/brand/brand-main";
import { ConCategory1 } from "@/types/brandList";
import { CategoryType } from "@/types/category";
import { getBrandDetail } from "@/lib/brand";

interface BrandMainProps {
  conCategory1: ConCategory1[];
  category: CategoryType;
}

const BrandsItem = ({ conCategory1, category }: BrandMainProps) => {
  console.log("카테고리입니다.");
  console.log(category);
  return (
    <>
      <Brand conCategory1={conCategory1} category={category} />{" "}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { data } = await getBrandDetail(Number(query.id));
    console.log("데이터이다");
    console.log(data);
    return {
      props: { conCategory1: data.conCategory1.conCategory2s },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default BrandsItem;
