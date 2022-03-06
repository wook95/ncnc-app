import axios from 'axios';
import { ItemDetailType } from '@/types/productDetail';

const DETAIL_ITEM_URL = 'https://api2.ncnc.app/con-items';

export const getProductDetail = async (conItemId: number) => {
  const response = await axios.get<{ conItem: ItemDetailType }>(
    `${DETAIL_ITEM_URL}/${conItemId}`,
  );
  return response;
};
