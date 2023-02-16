import compose from './compose'

// 支持中间件，用以加强 dispatch
export default function applyMiddleware(...middlewares: any[]) {

	return (createStore: any) => (reducer: any) => {

		const store = createStore(reducer)

		let dispatch = store.dispatch

		const middlewareAPI = {
			getState: store.getState,
			// 每一个中间件都需要一个单独的 dispatch
			dispatch: (action: any, ...args: any) => dispatch(action, ...args)
		}

		// 给中间件传入所需要的基本参数 getState 和 dispatch
		const middlewareChain = middlewares.map(middleware => middleware(middlewareAPI))

		// 得到增强后的 dispatch
		dispatch = compose(...middlewareChain)(store.dispatch)
		
		// 最后返回全新的 store
		return {
			...store,
			dispatch
		}
	}
}