import axios from 'axios';// import { GetUserInfoDto } from "shared/dto/user/user.dto";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;
const userFactories = {
  getUser: () => {
    // return httpService.callAPI(new GetUserInfoDto());
    // return axios({
    //   method: 'get',
    //   url: `${url}/proposal`,
    // });
  },
};
export default userFactories;
