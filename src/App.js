import React from 'react'
import { Employees } from './components/Employees/Employees'
import { AddEmployee } from './components/AddEmployee/AddEmployee'
//PLAN
// 1. Зарефакторити app у классовий компонент, додати стейт для працівників - [x] - Vugar
// 2. Створити компонент для відображення працівників, та компонент одного працівника - [x] - Anton
// 3. Додати можливість додавання нових працівників - [x] - Kyrylo S
// 4. Додати можливість видаляти існуючого працівника  - [] - Kyrylo I
// 5. Пошук по імені працівника - [] - Vlad
// 6. Заблокувати додавання однакових - [] - Maria
// 7. Додати можливість обрати відділ для працівника - [] - Tanya
// 8. Перемикач між відділами, фільтр наприклад [dev, qa, manager, hr] - [] - Svitlana

// const App = () => {
// 	return <div>App</div>
// }
class App extends React.Component {
	state = {
		employees: [
			{ id: '1', name: 'Alex', salary: 12000, position: 'dev' },
			{ id: '2', name: 'Anton', salary: 14000, position: 'dev' },
		],
	}

	handleAddNewEmployee = newData => {
		const newUser = { id: crypto.randomUUID(), position: 'default', ...newData }
		this.setState(prevState => ({ employees: [...prevState.employees, newUser] }))
	}

	render() {
		const { employees } = this.state
		return (
			<div>
				<AddEmployee addUser={this.handleAddNewEmployee} />
				<Employees dataEmployee={employees} />
			</div>
		)
	}
}
export default App
