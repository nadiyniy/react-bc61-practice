import { Cart } from './components/Cart'
import { Header } from './components/Header'
import data from './assets/article.json'

function App() {
	console.log(data)

	return (
		<div>
			<Header />
			<Cart data={data} />
		</div>
	)
}

export default App
