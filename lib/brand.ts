import axios from "axios";
import { ConCategory1 } from "@/types/brandList";

const API = axios.create({ baseURL: "https://api2.ncnc.app" });

export const getBrandDetail = (conItemId: number) =>
  API.get<{ conCategory1: ConCategory1 }>(`con-category1s/${conItemId}/nested`);
