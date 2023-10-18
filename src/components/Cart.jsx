export const Cart = ({ data }) => {
	const { name, poster, tag, title, description, postedAt, avatar } = data
	return (
		<div>
			<div>
				<img src={poster} alt='card__image' />
			</div>
			<div>
				<h2>{tag}</h2>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div>
				<div>
					<img src={avatar} alt='Jane Doe' />
					<div>
						<p>{name}</p>
						<p>{postedAt}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
