import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk } from "../redux/posts/operations";
import { selectUser } from "../redux/user/selector";
import moment from "moment";

const CommentForm = ({ post }) => {
  const { register, handleSubmit, reset } = useForm();
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const submit = (data) => {
    const newPost = {
      message: data.coments,
      owner: name,
      createdAt: moment().format("DD/MM/YYYY hh:mm:ss"),
    };
    dispatch(
      addCommentThunk({ ...post, comments: [...post.comments, newPost] })
    );
    console.log(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <textarea
          {...register("coments", { minLength: 20 })}
          name="coments"
          placeholder="Leave your comment"
        ></textarea>
        <button type="submit">Add comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
