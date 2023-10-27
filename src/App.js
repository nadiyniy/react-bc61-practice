import React from 'react'
import { fetchProducts } from './servises/apiJs'
import { ProductItem } from './components/ProductItem'

class App extends React.Component {
	state = {
		loading: false,
		products: [],
		error: null,
		query: '',
		skip: 0,
	}
	async componentDidMount() {
		this.setState({ loading: true })
		try {
			const { products } = await fetchProducts()
			this.setState({ products })
			console.log(products)
		} catch (err) {
			console.log(err)
		} finally {
			this.setState({ loading: false })
		}
	}
	async componentDidUpdate(prevProps, prevState) {
		if (this.state.skip !== prevState.skip) {
			this.setState({ loading: true })

			try {
				const { products } = await fetchProducts({ skip: this.state.skip })
				this.setState(prev => ({ products: [...prev.products, ...products] }))
			} catch (error) {
				console.log(error)
			} finally {
				this.setState({ loading: false })
			}
		}
	}

	handleLoadMore = () => {
		this.setState(prev => ({ skip: prev.skip + 4 }))
	}

	render() {
		const { products } = this.state
		return (
			<div>
				<h1>Product list</h1>
				<ul>
					{products.map(item => (
						<ProductItem product={item} key={item.id} />
					))}
				</ul>
				<button onClick={this.handleLoadMore}>load more</button>
			</div>
		)
	}
}
export default App
