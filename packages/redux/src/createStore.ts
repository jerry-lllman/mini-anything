
const initType = Symbol(+new Date())

export default function createStore(reducer: any, enhancer: any) {

	// 如果有中间件的话就返回中间件返回的结果
	if (enhancer) {
		return enhancer(createStore)(reducer)
	}

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