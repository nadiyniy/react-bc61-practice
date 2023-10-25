import axios from "axios";

const instanse = axios.create({
  baseURL: "https://dummyjson.com/",
});

export const fetchProducts = async () => {
  const { data } = await instanse.get("products");
  return data;
};
