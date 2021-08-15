import { apiServer } from "../../utils/config";
import axios from "axios";

export const getData = async <T extends {}>(endpoint: string) => {
  const url = `${apiServer}/${endpoint}`;
  try {
    const response = await axios.get<T[]>(url);
    return response.data;
  } catch (error) {
    console.log(`Request URL error:`, error);
    return [];
  }
};
