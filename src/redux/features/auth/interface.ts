import { SIGNUP_TYPE } from "@/interface";

export interface UserResponse {
  _id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  role: "user" | "agency" | "admin";
  status: "active" | "inactive";
  signupType: SIGNUP_TYPE;
  createdAt: Date;
  updatedAt: Date;
  token: string | undefined;
}
