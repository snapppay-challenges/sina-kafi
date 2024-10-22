import { AxiosResponse } from "axios";
import axiosInstance from "../config/axios";
import { sanitizeInput } from "../utils/helper";

export const getContacts = (
  skip: number,
  search: Record<string, string>
): Promise<AxiosResponse<ApiResponse<IContact[]>>> => {
  const sanitizedFirstName = sanitizeInput(search?.name || "");
  const sanitizedLastName = sanitizeInput(search?.lastName || "");
  const sanitizedPhone = sanitizeInput(search?.phone || "");

  const encodedFirstName = encodeURIComponent(sanitizedFirstName);
  const encodedLastName = encodeURIComponent(sanitizedLastName);
  const encodedPhone = encodeURIComponent(sanitizedPhone);

  return axiosInstance({
    method: "GET",
    url: "/passenger",
    params: {
      skip: skip * 30,
      where: {
        first_name: { contains: encodedFirstName },
        last_name: { contains: encodedLastName },
        phone: { contains: encodedPhone },
      },
    },
  });
};

export const getContactDetails = (
  id: number
): Promise<AxiosResponse<IContact>> => {
  return axiosInstance.get(`/passenger/${id}`);
};
