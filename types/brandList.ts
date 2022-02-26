export type ConCategory1 = {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
  conCategory2s: ConCategory2[];
};

export type ConCategory2 = {
  id: number;
  name: string;
  conCategory1Id: number;
  imageUrl: string;
  conItems: ConItem[];
};

export type ConItem = {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  count: number;
  imageUrl: string;
};
