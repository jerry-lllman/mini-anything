import { useEffect, useReducer } from "react"
import store from "../../store"

export default function ReduxPage() {

	const count = store.getState()

	const [, forceUpdate] = useReducer((state) => state + 1, 0)

	useEffect(() => {
		const unsubscribe = store.subscribe(forceUpdate)

		return () => {
			unsubscribe()
		}
	}, [])

	const add = () => {
		store.dispatch({ type: 'ADD' })
		console.log(store.getState())
	}

	const minus = () => {
		store.dispatch((dispatch: any) => {
			setTimeout(() => {
				dispatch({ type: 'MINUS' })
			}, 1000)
		})
	}


	return (
		<div>
			<p>{count}</p>
			<button onClick={add}>+1</button>
			<button onClick={minus}>-1</button>
		</div>
	)
}