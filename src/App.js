import React from 'react'
import { Employees } from './components/Employees/Employees'
import { AddEmployee } from './components/AddEmployee/AddEmployee'
import { SearchUser } from './components/SearchUser/SearchUser'
import { Filter } from './components/Filter/Filter'
import { toast } from 'react-toastify'

class App extends React.Component {
	state = {
		employees: [
			{ id: '1', name: 'Alex', salary: 12000, position: 'dev' },
			{ id: '2', name: 'Anton', salary: 14000, position: 'dev' },
		],
		filter: '',
		department: 'all',
	}

	componentDidUpdate(_, prevState) {
		window.localStorage.setItem('employees', JSON.stringify(this.state))
	}

	componentDidMount() {
		const savedData = JSON.parse(window.localStorage.getItem('employees'))
		if (savedData) {
			this.setState({ ...savedData })
		}
	}

	handleDeleteUser = id => {
		this.setState(prev => ({
			employees: prev.employees.filter(user => user.id !== id),
		}))
		toast.success(`Congratulations, you have deleted user`)
	}

	handleAddNewEmployee = newData => {
		const { employees } = this.state
		const existingName = employees.find(item => item.name === newData.name)
		if (existingName) {
			alert(`${newData.name} alredy exsists`)
		} else {
			const newUser = { id: crypto.randomUUID(), ...newData }
			this.setState(prevState => ({
				employees: [...prevState.employees, newUser],
			}))
		}
	}

	handleChangeFilter = e => {
		this.setState({ filter: e.target.value })
	}

	getFilterData = () => {
		return this.state.employees
			.filter(user => user.name.toLowerCase().includes(this.state.filter.toLowerCase()))
			.filter(user =>
				this.state.department === 'all'
					? user
					: user.position.toLowerCase().includes(this.state.department.toLowerCase())
			)
	}

	handleChangeDepartment = department => {
		this.setState({ department })
		toast.info(`Congratulations, you have changed to ${department}`)
	}

	render() {
		const { employees } = this.state
		const filteredData = this.getFilterData()
		const btns = [...new Set(employees.map(user => user.position))]

		return (
			<div>
				<AddEmployee addUser={this.handleAddNewEmployee} />
				<SearchUser setFilter={this.handleChangeFilter} />
				<br />
				<Filter onChangeDepartment={this.handleChangeDepartment} btns={btns} />
				<Employees deleteUser={this.handleDeleteUser} dataEmployee={filteredData} />
			</div>
		)
	}
}
export default App
