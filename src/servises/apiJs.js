import axios from 'axios';

const instanse = axios.create({
	baseURL: 'https://dummyjson.com/',
});

export const fetchProducts = async (params) => {
	const { data } = await instanse.get('products', {
		params: {
			limit: 4,
			...params,
		},
	});
	return data;
};
