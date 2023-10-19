import { Cart } from './components/Cart'
import { Header } from './components/Header'
import data from './assets/article.json'
import { Statistics } from './components/Statistics'
import dataStat from './assets/data.json'
import { CartModules } from './components/CardModules/CartModules'
import { CartStyled } from './components/CartStyled/CartStyled'

function App() {
	console.log(data)

	return (
		<div>
			<Header />
			<CartModules data={data} />
			<CartStyled data={data} />
			<Statistics dataStat={dataStat} title='Info' />
		</div>
	)
}

export default App
