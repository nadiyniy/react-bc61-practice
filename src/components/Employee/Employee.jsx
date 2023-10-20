import React from 'react'
import ecss from './employee.module.css'

export const Employee = ({ id, name, salary, position }) => {
	return (
		<li className={ecss.item}>
			<p className={ecss.name}>{name}</p>
			<p className={ecss.position}>{position}</p>
			<p className={ecss.salary}>{salary}</p>
			<button className={ecss.button}>Delete</button>
		</li>
	)
}
