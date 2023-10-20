import React from 'react'
import { sayHi } from '../../helpers/sayHi'

export class AddEmployee extends React.Component {
	state = {
		name: '',
		salary: '',
	}

	handleChangeInput = ({ target }) => {
		const { name, value } = target
		// e.target.value => value
		// e.target.name => name

		//1 variant
		// if (e.target.name === 'name') {
		// 	this.setState({ name: e.target.value })
		// } else {
		// 	this.setState({ salary: e.target.value })
		// }

		//2 variant

		// e.target.name === 'name' ? this.setState({ name: e.target.value }) : this.setState({ salary: e.target.value })
		//3 variant

		// switch (e.target.name) {
		// 	case 'name':
		// 		this.setState({ name: e.target.value })
		// 		break
		// 	case 'salary':
		// 		this.setState({ salary: e.target.value })
		// 		break

		// 	default:
		// 		break
		// }

		//4 variant
		this.setState({ [name]: value })
	}
	handleOnClick = () => {
		this.props.addUser(this.state)
		// sayHi(this.state.name)
	}

	render() {
		const { name, salary } = this.state

		return (
			<div>
				<input name='name' value={name} onChange={this.handleChangeInput} />
				<input name='salary' value={salary} onChange={this.handleChangeInput} />

				<button onClick={this.handleOnClick}>Add New Employee</button>
				<button onClick={() => sayHi(this.state.name)}>SayHello</button>
			</div>
		)
	}
}
