export type Category = {
  id: number;
  key: string;
  name: string;
};

export type Items = {
  id: number;
  question: string;
  answer: string;
};

export type CategoryResponse = {
  qaTypes: Array<Category>;
};

export type ItemsResponse = {
  qas: Array<Items>;
};

export interface ItemsObject {
  [index: string]: Array<Items>;
}
