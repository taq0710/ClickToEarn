import { SIGNUP_TYPE } from "@/interface";

export interface UserResponse {
  user: {
    id: string;
    email: string;
    fullName: string;
    avatarUrl: string;
    createdAt: Date;
    updatedAt: Date;
    role: string;
  };
  token: {
    accessToken: string;
    refreshToken?: string;
  };
}
export interface IRegisterResponse {
  message: string;
  statusCode: number | null;
}
