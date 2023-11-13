import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from '../redux/posts/selectors';
import { deletePostsThunk } from '../redux/posts/operations';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
	const posts = useSelector(selectPosts);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleDeletePost = (id) => {
		dispatch(deletePostsThunk(id));
	};
	const handleReadMore = (id) => {
		navigate(`/readmore/${id}`);
	};

	return (
		<div>
			<h2>Posts</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<p>{post.title}</p>
						<p>{post.body}</p>
						<button onClick={() => handleDeletePost(post.id)}>Delete post</button>
						<button onClick={() => handleReadMore(post.id)}>Read more</button>
						<button>Edit post</button>
					</li>
				))}
			</ul>
		</div>
	);
};
