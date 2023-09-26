import { axiosRequest } from "@/utils/axiosRequest";
import {
  AgencyResponse,
  IAgency,
  IServices,
  IServicesResponse,
} from "./interfaces";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

const factories = {
  requestCreatePackAgency: (data: IAgency) => {
    return axiosRequest({
      method: "post",
      url: `${url}post/create`,
      data: data,
    });
  },
  getAgencyPack: (data: AgencyResponse) => {
    return axiosRequest({
      method: "get",
      url: `${url}post/getAll`,
      data: data,
    });
  },
  requestCreateService: (data: IServices) => {
    return axiosRequest({
      method: "post",
      url: `${url}product/create`,
      data: data,
    });
  },
  getService: (data: IServicesResponse) => {
    return axiosRequest({
      method: "get",
      url: `${url}product/getAll`,
      data: data,
    });
  },
  editPost: (data: AgencyResponse) => {
    return axiosRequest({
      method: "patch",
      url: `/post/${data.id}`,
      data: data,
    });
  },
};
export default factories;
