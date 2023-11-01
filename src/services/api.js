import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

export const fetchPost = async (params) => {
  const { data } = await axios.get(`/posts`, {
    params: {
      ...params,
    },
  });
  return data;
};
