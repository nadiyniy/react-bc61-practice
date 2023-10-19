import css from './CartModules.module.css'
export const CartModules = ({ data }) => {
	const { name, poster, tag, title, description, postedAt, avatar } = data

	return (
		<div className={css.centered}>
			<div className={css.wrapper}>
				<div>
					<img className={css.img} src={poster} alt='card__image' />
				</div>
				<div className={css.wrapperInfo}>
					<div>
						<span className={css.tag}>{tag}</span>
						<h3 className={css.title}>{title}</h3>
						<p className={css.text}>{description}</p>
					</div>
					<div>
						<div className={css.wrapperImg}>
							<img className={css.imgLittle} src={avatar} alt='Jane Doe' />
							<div className={css.wrapperText}>
								<p>{name}</p>
								<p>{postedAt}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
