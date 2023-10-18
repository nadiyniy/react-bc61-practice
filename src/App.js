import { Cart } from './components/Cart'
import { Header } from './components/Header'
import data from './assets/article.json'
import { Statistics } from './components/Statistics'
import dataStat from './assets/data.json'

function App() {
	console.log(data)

	return (
		<div>
			<Header />
			<Cart data={data} />
			<Statistics dataStat={dataStat} title='Info' />
		</div>
	)
}

export default App
