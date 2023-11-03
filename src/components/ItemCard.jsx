import React from 'react'

export const ItemCard = ({ id, title, price, thumbnail, description }) => {
	return (
		<li className='border-2 border-black shadow-md px-4 py-6 rounded-md '>
			<img src={thumbnail} alt={title} />
			<div>
				<p>{title}</p>
				<p>{description}</p>
			</div>
			<div className='flex justify-between'>
				<span>{price}$</span>
				<button>Add to cart</button>
			</div>
		</li>
	)
}
