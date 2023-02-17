
// @ts-nocheck
export default function combineReducers(reducers) {

	// 返回一个 reducer 合集
	return function combination(state = {}, action) {
		let hasChanged = false
		const nextState = {}

		for (const key in reducers) {
			const reducer = reducers[key]
			nextState[key] = reducer(state[key], action)
			hasChanged = hasChanged || nextState[key] !== state[key]
		}

		hasChanged = hasChanged || Object.keys(nextState).length !== Object.keys(state).length

		return nextState
	}
}