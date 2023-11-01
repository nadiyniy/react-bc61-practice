import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const SinglPost = () => {
  const location = useLocation();
  console.log(location);
  const goBackRef = useRef(location.state?.from || "/posts");

  return (
    <div>
      <Link to={goBackRef.current}>Go back</Link>
    </div>
  );
};

export default SinglPost;
