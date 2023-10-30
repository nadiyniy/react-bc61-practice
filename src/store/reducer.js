export const initialState = {
	employees: [],
	filter: '',
	department: '',
};
export const employeesReducer = (state, action) => {
	const { type, payload } = action;
	console.log(action);
	switch (type) {
		case 'loadFromLS':
			return { ...state, employees: payload };
		case 'deleteUser':
			return { ...state, employees: state.employees.filter((user) => user.id !== payload) };
		case 'addUser':
			return { ...state, employees: [...state.employees, payload] };
		case 'changeFilter':
			return { ...state, filter: payload };
		case 'changeDepartment':
			return { ...state, department: payload };

		default:
			return state;
	}
};
