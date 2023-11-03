import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com/";

export async function getProducts() {
  const { data } = await axios.get("products?limit=3");
  return data;
}
