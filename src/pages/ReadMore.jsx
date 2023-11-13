import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "../components/CommentForm";

const ReadMore = () => {
  const { id } = useParams();
  const [post, setPost] = useState();
  const dispatch = useEffect(() => {
    axios
      .get(`https://654a2082e182221f8d528c04.mockapi.io/posts/${id}`)
      .then(({ data }) => {
        console.log(data);
        setPost(data);
      });
  }, [id]);
  if (!post) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>{post.createdAt}</p>
      <p>{post.owner}</p>
      <hr />
      <ul>
        {post.comments?.map((item) => (
          <li key={item.createdAt}>
            <p>message {item.message}</p>
            <p>owner {item.owner}</p>
            <p>At{item.createdAt}</p>
          </li>
        ))}
      </ul>
      <CommentForm post={post} />
    </div>
  );
};

export default ReadMore;
