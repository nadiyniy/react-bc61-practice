import React from 'react'

/* ['dev', 'qa', 'manager', 'hr'] */

export const Filter = ({ btns = [], onChangeDepartment }) => {
	return (
		<div>
			<ul>
				<button onClick={() => onChangeDepartment('all')}>All</button>
				{btns.map(btn => (
					<li key={btn}>
						<button onClick={() => onChangeDepartment(btn)}>{btn}</button>
					</li>
				))}
			</ul>
		</div>
	)
}
