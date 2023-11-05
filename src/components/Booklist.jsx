import React from 'react'

export const Booklist = ({ data }) => {
	return (
		<div>
			<form>
				<input type='text' placeholder='Enter name' />
				<input type='text' placeholder='Enter author' />
				<button>Add book</button>
			</form>
			<ul>
				{data.map(item => (
					<li>
						<h2>{item.title} </h2>
						<h4>{item.author}</h4>
						<button>Add to favorite</button>
					</li>
				))}
			</ul>
		</div>
	)
}
