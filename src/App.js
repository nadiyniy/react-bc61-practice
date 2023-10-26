import axios from 'axios'
import React, { Component } from 'react'
import { getData } from './servises/dummy'
import Modal from './components/Modal'

export default class App extends Component {
	state = {
		items: [],
		isOpen: false,
		selectedImg: '',
	}
	async componentDidMount() {
		try {
			const data = await getData()
			console.log(data)
			this.setState({ items: data.products })
		} catch (error) {}
	}

	openModal = () => {
		this.setState({ isOpen: true })
	}
	closeModal = () => {
		this.setState({ isOpen: false })
	}
	openModalWithImg = img => {
		this.openModal()
		this.setState({ selectedImg: img })
	}

	render() {
		const { isOpen, selectedImg } = this.state
		return (
			<div>
				<ul>
					{this.state.items.map(item => (
						<li>
							<img src={item.thumbnail} onClick={() => this.openModalWithImg(item.thumbnail)} alt='safasdf' />
						</li>
					))}
				</ul>
				<button onClick={this.openModal}>Open modal</button>
				<button onClick={this.closeModal}>Close modal</button>
				<div
					style={{ width: '10vw', height: '10vh', background: 'black' }}
					onClick={() => this.openModalWithImg('black')}
				></div>
				<div
					style={{ width: '10vw', height: '10vh', background: 'violet' }}
					onClick={() => this.openModalWithImg('violet')}
				></div>

				{isOpen && (
					<Modal closeModal={this.closeModal}>
						<img src={selectedImg} />
					</Modal>
				)}
			</div>
		)
	}
}
