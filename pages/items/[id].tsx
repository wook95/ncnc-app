import { GetServerSideProps, NextPage } from 'next';

import ItemDetail from '@/components/item-detail';
import ErrorContainer from '@/components/error-container';

import { getProductDetail } from '@/lib/api';
import { ItemDetailType } from '@/types/productDetail';

interface ItemDetailProps {
  conItem: ItemDetailType;
  errorMessage: string;
}

const ItemDetailPage: NextPage<ItemDetailProps> = ({
  conItem,
  errorMessage,
}: ItemDetailProps) => {
  return conItem ? (
    <ItemDetail conItem={conItem} />
  ) : (
    <ErrorContainer message={errorMessage} />
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { data } = await getProductDetail(Number(query.id));
    return {
      props: { conItem: data.conItem },
    };
  } catch (e) {
    return {
      props: { errorMessage: '잘못된 주소' },
    };
  }
};

export default ItemDetailPage;
