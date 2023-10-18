import { StatCart } from './StatCart'

export const Statistics = ({ dataStat, title }) => (
	<div>
		<h1>{title}</h1>
		<ul>
			{dataStat.map(({ id, title, total }) => (
				<StatCart key={id} total={total} title={title} />
			))}
		</ul>
	</div>
)
