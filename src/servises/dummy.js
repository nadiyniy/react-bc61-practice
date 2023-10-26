import axios from 'axios'

export const getData = async () => {
	const { data } = await axios.get('https://dummyjson.com/products')
	return data
}
