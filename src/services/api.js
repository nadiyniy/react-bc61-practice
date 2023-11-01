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

export const fetchPostsByQuery = async (params) => {
  const { data } = await axios.get(`/posts/search`, {
    params: {
      ...params,
    },
  });
  return data;
};

// https://dummyjson.com/posts/search?q=love
