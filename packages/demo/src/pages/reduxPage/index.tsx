import store from "../../store"

export default function ReduxPage() {

	const count = store.getState()

	const add = () => {
		store.dispatch({ type: 'ADD' })
		console.log(store.getState())
	}

	return (
		<div>
			<p>{count}</p>
			<button onClick={add}>+1</button>
		</div>
	)
}