import { StyledImg, StyledInfo, StyledWrapper, StyledWrapperImg } from './CartStyled.styled'

export const CartStyled = ({ data }) => {
	const { name, poster, tag, title, description, postedAt, avatar } = data

	return (
		<StyledWrapper>
			<div>
				<StyledImg src={poster} alt='card__image' />
			</div>
			<StyledInfo>
				<span>{tag}</span>
				<h3>{title}</h3>
				<p>{description}</p>
			</StyledInfo>
			<div>
				<StyledWrapperImg>
					<img src={avatar} alt='Jane Doe' />

					<div>
						<p>{name}</p>
						<p>{postedAt}</p>
					</div>
				</StyledWrapperImg>
			</div>
		</StyledWrapper>
	)
}
