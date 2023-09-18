import { TOKEN } from "@/constants";
import axios, { AxiosRequestConfig } from "axios";


const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";
export const axiosRequest = async (
  config: AxiosRequestConfig,
  unauthorized?: boolean,
) => {
  const axiosConfig: AxiosRequestConfig = {
    ...config,
    baseURL: BACKEND_URL,
  };

  if (!unauthorized && localStorage.getItem(TOKEN)) {
    axiosConfig.headers = {
      Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
    };
  }

  const response = await axios(axiosConfig);
  return response.data;
};
