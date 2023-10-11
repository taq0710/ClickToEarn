import axios from "axios";
import { axiosRequest } from "./axiosRequest";

const uploadFileVideo = async (file: File): Promise<any> => {
  const formData = new FormData();
  formData.append("files", file, file.name);
  const res = await axiosRequest({
    url: "uploads/S3",
    data: formData,
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

export { uploadFileVideo };
