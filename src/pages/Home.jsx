export const Home = () => {
	const posts = [{ id: '1', title: 'Hello', body: 'Lorem ipsum' }]
	return (
		<div>
			<form>
				<input type='text' />
				<textarea></textarea>
				<button>Add post</button>
			</form>

			<h2>Posts</h2>
			<ul>
				{posts.map(post => (
					<li key={post.id}>
						<p>{post.title}</p>
						<p>{post.body}</p>
						<button>Delete post</button>
						<button>Read more</button>
						<button>Edit post</button>
					</li>
				))}
			</ul>
		</div>
	)
}
