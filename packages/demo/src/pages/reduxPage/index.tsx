import { useEffect, useReducer } from "react"
import multipleStore from "../../store/multipleStore"
import store from "../../store/store"

export default function ReduxPage() {

	const count = store.getState()

	const [, forceUpdate] = useReducer((state) => state + 1, 0)

	useEffect(() => {
		const unsubscribe = store.subscribe(forceUpdate)
		const multipleStoreUnsubscribe = multipleStore.subscribe(forceUpdate)

		return () => {
			unsubscribe()
			multipleStoreUnsubscribe()
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
			<hr />
			<div>----------multipleStore--------</div>
			<div>{multipleStore.getState().count}</div>
			<button onClick={() => {
				multipleStore.dispatch({ type: 'ADD' })
			}}>+1</button>
			<button onClick={() => {
				multipleStore.dispatch({ type: 'MINUS' })
			}}>-1</button>
			<div>name: {multipleStore.getState().user.name}</div>
			<input
				value={multipleStore.getState().user.name}
				onChange={e => multipleStore.dispatch({ type: 'NAME', payload: { name: e.target.value } })}
			/>
			<div>age: {multipleStore.getState().user.age}</div>
			<input
				value={multipleStore.getState().user.age}
				onChange={e => multipleStore.dispatch({ type: 'AGE', payload: { age: Number(e.target.value) } })}
			/>
		</div>
	)
}