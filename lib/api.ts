import axios from "axios";
import { ItemDetailType } from "@/types/productDetail";

const API = axios.create({ baseURL: "https://api2.ncnc.app" });

export const getProductDetail = (conItemId: number) =>
  API.get<{ conItem: ItemDetailType }>(`con-items/${conItemId}`);
