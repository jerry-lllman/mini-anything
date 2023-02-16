
const initType = Symbol(+new Date())

export default function createStore(reducer: any) {

	let currentState: any
	let listeners: Function[] = []

	function getState() {
		return currentState
	}

	function dispatch(action: any) {
		currentState = reducer(currentState, action)
		listeners.forEach(listener => listener())
	}

	function subscribe(listener: Function) {

		listeners.push(listener)

		return () => {
			listeners = listeners.filter(fn => fn !== listener)
		}
	}

	// redux init
	dispatch({ type: initType })

	return {
		getState,
		dispatch,
		subscribe
	}
}