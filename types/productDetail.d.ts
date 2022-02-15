type ConCategoryOneType = {
  id: number;
  name: string;
  createdAt: string;
  priority: number;
  discountRate: number;
  info: string;
  imageUrl: string;
};

type ConCategoryTwoType = {
  id: number;
  name: string;
  adminUserId: number;
  priority: number;
  createdAt: string;
  conCategory1Id: number;
  info: string;
  imageUrl: string;
  conCategory1: ConCategoryOneType;
};

type OptionType = {
  expireAt: string;
  count: number;
  sellingPrice: number;
  id?: number;
};

export type ItemDetailType = {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  ncSellingPrice: number;
  information: string;
  tip: null | string;
  warning: string;
  discountRate: number;
  info: null | string;
  isOnlyAccount: number;
  conCategory2Id: number;
  imageUrl: string;
  conCategory2: ConCategoryTwoType;
  options: OptionType[];
};
