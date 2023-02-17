// @ts-nocheck
export default function logger({ getState } = {}) {
	return next => action => {
		console.log('---------------')

		const prevState = getState()
		console.log('prev state', prevState)

		const returnValue = next(action)
		console.log('action', action)
		const nextState = getState()

		console.log('next state', nextState)
		console.log('---------------')

		return returnValue
	}
}