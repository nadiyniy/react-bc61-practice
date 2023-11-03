const initialState = {
	products: [],
};

export const productReducer = (state = initialState, action) => {
	const { payload } = action;
	switch (action.type) {
		case 'setproducts': {
			return {
				...state,
				products: payload,
			};
		}
		default: {
			return state;
		}
	}
};
