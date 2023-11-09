import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from '../redux/posts/selectors';
import { deletePostsThunk } from '../redux/posts/operations';

export const Home = () => {
	const posts = useSelector(selectPosts);
	const dispatch = useDispatch();

	const handleDeletePost = (id) => {
		dispatch(deletePostsThunk(id));
	};

	return (
		<div>
			<form>
				<input type='text' />
				<textarea></textarea>
				<button>Add post</button>
			</form>

			<h2>Posts</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<p>{post.title}</p>
						<p>{post.body}</p>
						<button onClick={() => handleDeletePost(post.id)}>Delete post</button>
						<button>Read more</button>
						<button>Edit post</button>
					</li>
				))}
			</ul>
		</div>
	);
};
