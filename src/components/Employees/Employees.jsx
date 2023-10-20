import React from 'react'
import { Employee } from '../Employee/Employee'
import empcss from './employees.module.css'

export const Employees = ({ dataEmployee }) => {
	return (
		<div className={empcss.wrapper}>
			<ul className={empcss.list}>
				{dataEmployee.map(item => (
					<Employee {...item} key={item.id} />
				))}

				{/* {dataEmployee.map(item => (
					<li key={item.id}>
						<p>{item.name}</p>
						<p>{item.position}</p>
						<p>{item.salary}</p>
						<button>Delete</button>
					</li>
				))} */}
			</ul>
		</div>
	)
}
