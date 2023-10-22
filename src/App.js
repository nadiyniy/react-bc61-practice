import React from 'react'
import { Employees } from './components/Employees/Employees'
import { AddEmployee } from './components/AddEmployee/AddEmployee'
import { SearchUser } from './components/SearchUser/SearchUser'
//PLAN
// 1. Зарефакторити app у классовий компонент, додати стейт для працівників - [x] - Vugar
// 2. Створити компонент для відображення працівників, та компонент одного працівника - [x] - Anton
// 3. Додати можливість додавання нових працівників - [x] - Kyrylo S
// 4. Додати можливість видаляти існуючого працівника  - [x] - Kyrylo I
// 5. Пошук по імені працівника - [x] - Vlad

// 6. Заблокувати додавання однакових - [] - Maria
// 7. Додати можливість обрати відділ для працівника - [] - Tanya
// 8. Перемикач між відділами, фільтр наприклад [dev, qa, manager, hr] - [] - Svitlana
// 9. Переписати додавання юзера через форму, додати стейт для форми  - [] -

class App extends React.Component {
	state = {
		employees: [
			{ id: '1', name: 'Alex', salary: 12000, position: 'dev' },
			{ id: '2', name: 'Anton', salary: 14000, position: 'dev' },
		],
		filter: '',
	}

	handleDeleteUser = id => {
		this.setState(prev => ({ employees: prev.employees.filter(user => user.id !== id) }))
	}

	handleAddNewEmployee = newData => {
		const newUser = { id: crypto.randomUUID(), position: 'default', ...newData }
		this.setState(prevState => ({ employees: [...prevState.employees, newUser] }))
	}

	handleChangeFilter = e => {
		this.setState({ filter: e.target.value })
	}

	getFilterData = () => {
		return this.state.employees.filter(user => user.name.toLowerCase().includes(this.state.filter.toLowerCase()))
		// взяти массив даних
		// зробити фільтр
		// поввернути фільтрований масив
	}

	render() {
		const { employees } = this.state
		const filteredData = this.getFilterData()
		return (
			<div>
				<AddEmployee addUser={this.handleAddNewEmployee} />
				<SearchUser setFilter={this.handleChangeFilter} />
				<Employees deleteUser={this.handleDeleteUser} dataEmployee={filteredData} />
			</div>
		)
	}
}
export default App
