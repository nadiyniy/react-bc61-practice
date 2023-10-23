import React from 'react'
import { Employees } from './components/Employees/Employees'
import { AddEmployee } from './components/AddEmployee/AddEmployee'
import { SearchUser } from './components/SearchUser/SearchUser'
import { Filter } from './components/Filter/Filter'
//PLAN
// 1. Зарефакторити app у классовий компонент, додати стейт для працівників - [x] - Vugar
// 2. Створити компонент для відображення працівників, та компонент одного працівника - [x] - Anton
// 3. Додати можливість додавання нових працівників - [x] - Kyrylo S
// 4. Додати можливість видаляти існуючого працівника  - [x] - Kyrylo I
// 5. Пошук по імені працівника - [x] - Vlad

// 6. Заблокувати додавання однакових - [x] - Maria
// 7. Додати можливість обрати відділ для працівника - [x] - Tanya
// 8. Перемикач між відділами, фільтр наприклад [dev, qa, manager, hr] - [x] - Svitlana
// 9. Переписати додавання юзера через форму, додати стейт для форми  - [] -

class App extends React.Component {
	state = {
		employees: [
			{ id: '1', name: 'Alex', salary: 12000, position: 'dev' },
			{ id: '2', name: 'Anton', salary: 14000, position: 'dev' },
		],
		filter: '',
		department: 'all',
	}

	handleDeleteUser = id => {
		this.setState(prev => ({ employees: prev.employees.filter(user => user.id !== id) }))
	}

	handleAddNewEmployee = newData => {
		const { employees } = this.state
		const existingName = employees.find(item => item.name === newData.name)
		if (existingName) {
			alert(`${newData.name} alredy exsists`)
		} else {
			const newUser = { id: crypto.randomUUID(), ...newData }
			this.setState(prevState => ({ employees: [...prevState.employees, newUser] }))
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
	}

	render() {
		const arr = [1, 2, 3, 1, 2, 3, 4, 51, 1, 5, 7, 3]
		const strArr = ['hello react is so beuty']
		console.log(new Set(...strArr))
		console.log(arr)
		console.log([...new Set(arr)])
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
