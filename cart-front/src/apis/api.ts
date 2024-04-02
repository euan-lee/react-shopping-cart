import { AxiosInstance } from "./axios";
import { URL } from "../Const/url";

export const getTotalItems = async () => {
  try {
    const data = await AxiosInstance.get(URL.getItems());
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getCart = async () => {
  try {
    const data = await AxiosInstance.get(URL.getCart());
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getOrders = async () => {
  try {
    const data = await AxiosInstance.get(URL.getOrders());
    return data;
  } catch (error) {
    console.error(error);
  }
};
