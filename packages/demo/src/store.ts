// import thunk from 'redux-thunk'
// import logger from 'redux-logger'

import { createStore, applyMiddleware } from "@mini/redux";
import logger from '@mini/redux-logger'
import thunk from '@mini/redux-thunk'

function countReducer(state = 0, action: any) {
	switch (action.type) {
		case "ADD":
			return state + 1;
		case "MINUS": 
			return state - 1;
		default:
			return state
	}
}

const store = createStore(countReducer, applyMiddleware(thunk, logger))

export default store
