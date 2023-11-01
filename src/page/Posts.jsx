import React, { useEffect, useState } from "react";
import { fetchPost, fetchPostsByQuery } from "../services/api";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export const Posts = () => {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("");
  const location = useLocation();

  const [search, setSearch] = useSearchParams();
  const query = search.get("query") || "";

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSetQuery = () => {
    setSearch(value ? { query: value } : {});
  };

  useEffect(() => {
    if (query) {
      fetchPostsByQuery({ q: query }).then((data) => setData(data.posts));
      return;
    }
    fetchPost().then((data) => setData(data.posts));
  }, [query]);
  return (
    <div>
      <input onChange={handleChange} value={value} type="text" />
      <button type="button" onClick={handleSetQuery}>
        Search
      </button>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <Link to={post.id.toString()} state={{ from: location }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
