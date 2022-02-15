import axios from "axios";
import { ConCategory1 } from "@/types/brandList";
const API = axios.create({ baseURL: "https://api2.ncnc.app" });

export const getProductDetail = (conItemId: number) =>
  API.get<{ conItem: ConCategory1 }>(`con-items/${conItemId}`);
