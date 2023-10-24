import React, { Component } from 'react';
import styled from 'styled-components';

export class Modal extends Component {
	render() {
		const { children, closeModal } = this.props;

		return (
			<StyledWrapper>
				<StyledContent>
					<button onClick={closeModal}>close</button>
					<div>{children}</div>
				</StyledContent>
			</StyledWrapper>
		);
	}
}

const StyledWrapper = styled.div`
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(10px);
	display: flex;
	justify-content: center;
	align-items: center;
`;
const StyledContent = styled.div`
	width: 400px;
	height: 400px;
	background-color: white;
	border: 1px solid black;
	border-radius: 10px;
	padding: 10px;
`;
