import { AxiosInstance } from "./Axios";
import { URL } from "../Const/Url";

export const getTotalItems = async () => {
  try {
    const data = await AxiosInstance.get(URL.getItems());
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getItem = async (param: string) => {
  try {
    const data = await AxiosInstance.get(URL.getItem(param));
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCart = async () => {
  try {
    const data = await AxiosInstance.get(URL.getCart());
    return data;
  } catch (error) {
    console.log(error);
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
