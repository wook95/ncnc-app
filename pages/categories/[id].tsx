import { GetServerSideProps } from "next";
import Brand from "@/components/brand/brand-main";
import { ConCategory1 } from "@/types/brandList";
import { CategoryType } from "@/types/category";
import { getCategory, getBrandDetail } from "@/lib/brand";
import DefaultHeader from "@/components/headers/default-header";

interface BrandMainProps {
  conCategory1: ConCategory1[];
  category: CategoryType;
  params: number;
}

const BrandsItem = ({ conCategory1, category, params }: BrandMainProps) => {
  return (
    <>
      <DefaultHeader
        title={category.conCategory1s.find((item) => item.id === params)?.name}
      />
      <Brand conCategory1={conCategory1} category={category} params={params} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { data } = await getBrandDetail(Number(query.id));
  const category = await getCategory();
  const params = Number(query.id);

  return {
    props: {
      conCategory1: data.conCategory1.conCategory2s,
      category: category.data,
      params,
    },
  };
};

export default BrandsItem;
