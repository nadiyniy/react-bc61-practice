import React from 'react'

export const Favorite = ({ data = [] }) => {
	return (
		<div>
			<h2>Favorite</h2>
			<input type='text' placeholder='Search by title' />
			<ul>
				{data.map(item => (
					<li>
						<h2>{item.title} </h2>
						<h4>{item.author}</h4>
						<button>Delete from favorite</button>
					</li>
				))}
			</ul>
		</div>
	)
}
