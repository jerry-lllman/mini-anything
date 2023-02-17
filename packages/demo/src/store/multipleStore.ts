import { applyMiddleware, combineReducers, createStore } from "@mini/redux";
import logger from "@mini/redux-logger";
import thunk from "@mini/redux-thunk";

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


function userReducer(state = { name: 'j', age: 0 }, action: any) {
	switch (action.type) {
		case "NAME":
			return { ...state, ...action.payload || {} };
		case "AGE":
			return { ...state, ...action.payload || {} };
		default:
			return state
	}
}

const multipleStore = createStore(
	combineReducers({
		count: countReducer,
		user: userReducer
	}),
	applyMiddleware(thunk, logger)
)

export default multipleStore