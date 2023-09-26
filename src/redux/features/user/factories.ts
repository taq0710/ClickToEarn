import { axiosRequest } from "@/utils/axiosRequest";
import axios from "axios"; // import { GetUserInfoDto } from "shared/dto/user/user.dto";
import { IUserDetail } from "./interface";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;
const userFactories = {
  getUser: (data: IUserDetail) => {
    return axiosRequest({
      method: "get",
      url: `${url}user/profile`,
      data: data,
    });
  },
};
export default userFactories;
