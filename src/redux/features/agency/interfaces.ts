import { PACKAGENCY_TYPE } from "@/interface";

export interface IAgency {
  title: string;
  url: string;
  des: string;
  thumb?: string;
  video?: string;
  service_packet?: string;
  amount_of_money?: string;
  price?: string;
}
export interface AgencyResponse {
  id?: string;
  title?: string;
  des?: string;
  url?: string;
  thumb?: string;
  date?: string;
  verify?: string;
  status?: string;
  edit?: string;
  report?: string;
  service_Packet?: string;
  video?: string;
}
export interface IServices {
  name: string;
  view?: number;
  subcribe?: number;
  price?: number;
  visit?: number;
  timeview?: number;
  service: string;
}
export interface IServicesResponse {
  name: string;
  view?: number;
  subcribe?: number;
  price?: number;
  visit?: number;
  timeview?: number;
  service: string;
}
