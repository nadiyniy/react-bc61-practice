import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logoutThunk } from '../redux/auth/operation';
import styled from 'styled-components';
import { selectIsLoggedIn } from '../redux/auth/selectors';

export const Layout = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<>
			<StyledHeader>
				<nav>
					<div>
						<NavLink to='/'>Home</NavLink>
						<NavLink to='/addPost'>Add post</NavLink>
					</div>
					<div>
						{isLoggedIn ? (
							<button type='button' onClick={() => dispatch(logoutThunk())}>
								LogOut
							</button>
						) : (
							<div>
								<NavLink to='/login'>Login</NavLink>
								<NavLink to='/register'>Register</NavLink>
							</div>
						)}
					</div>
				</nav>
			</StyledHeader>
			<Outlet />
		</>
	);
};

export const StyledHeader = styled.header`
	background-color: lightblue;
	nav {
		display: flex;
		gap: 10px;
		justify-content: space-between;
		div {
			display: flex;
			gap: 10px;
		}
	}
`;
