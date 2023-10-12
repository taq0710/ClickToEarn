export interface ILogin {
  email: string;
  password: string;
}
export interface ILoginSocial {
  token: string;
}
export enum PACKAGENCY_TYPE {
  YOUTUBE = "Youtube",
  WEBSITE = "Website",
}
export enum SIGNUP_TYPE {
  EMAIL_PASSWORD = "email password",
  GOOGLE = "google",
  FACEBOOK = "facebook",
}
export interface ISignUp {
  email: string;
  password: string;
  fullName: string;
  role: string;
}
export interface IPaging {
  page: number;
  limit: number;
}
