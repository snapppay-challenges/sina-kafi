import { AxiosResponse } from "axios";
import axiosInstance from "../config/axios";

export const getContacts = (
  skip: number,
  search: Record<string, string>
): Promise<AxiosResponse<ApiResponse<IContact[]>>> => {
  return axiosInstance({
    method: "GET",
    url: "/passenger",
    params: {
      skip: skip * 30,
      where: {
        first_name: { contains: search.name },
        last_name: { contains: search.lastName },
        phone: { contains: search.phone },
      },
    },
  });
};

export const getContactDetails = (
  id: number
): Promise<AxiosResponse<IContact>> => {
  return axiosInstance.get(`/passenger/${id}`);
};
