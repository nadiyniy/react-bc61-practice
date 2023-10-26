import React, { Component } from 'react'
import styled from 'styled-components'

export default class Modal extends Component {
	render() {
		return (
			<Wrapper>
				<div>
					<h1>Modal</h1>
					{this.props.children}
					<button onClick={this.props.closeModal}>Close</button>
				</div>
			</Wrapper>
		)
	}
}
const Wrapper = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	inset: 0;
	display: grid;
	backdrop-filter: blur(10px);
	place-content: center;
	div {
		width: 40vw;
		height: 40vh;
		background-color: white;
	}
`
