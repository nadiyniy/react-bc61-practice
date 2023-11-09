import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../redux/posts/selectors";
import { deletePostsThunk } from "../redux/posts/operations";
import Form from "../components/Form";
import LoginForm from "../components/LoginForm";

export const Home = () => {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  const handleDeletePost = (id) => {
    dispatch(deletePostsThunk(id));
  };

  return (
    <div>
      <Form />
      <LoginForm />
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <button onClick={() => handleDeletePost(post.id)}>
              Delete post
            </button>
            <button>Read more</button>
            <button>Edit post</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
