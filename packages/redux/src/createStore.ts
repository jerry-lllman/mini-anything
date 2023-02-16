
const initType = Symbol(+new Date())

export default function createStore(reducer: any) {

	let currentState: any

	function getState(){
		return currentState
	}

	function dispatch(action: any) {
		currentState = reducer(currentState, action)
	}

	function subscribe() {

	}

	dispatch({ type: initType })

	return {
		getState,
		dispatch,
		subscribe
	}
}