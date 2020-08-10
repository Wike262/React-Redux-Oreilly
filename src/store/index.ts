import { createStore, combineReducers, applyMiddleware } from 'redux';
import { colors } from './reducers';
import thunk from 'redux-thunk';

const clientLogger = (store: any) => (next: any) => (action: any) => {
	if (action.type) {
		let result;
		console.groupCollapsed('dispatching', action.type);
		console.log('prev state', store.getState());
		console.log('action', action);
		result = next(action);
		console.log('next state', store.getState());
		console.groupEnd();
		return result;
	} else {
		return next(action);
	}
};

const serverLogger = (store: any) => (next: any) => (action: any) => {
	console.log('\n  dispatching server action\n');
	console.log(action);
	console.log('\n');
	return next(action);
};

const middleware = (server: any) => [
	server ? serverLogger : clientLogger,
	thunk,
];

const storeFactory = (server = false, initialState = {}) =>
	applyMiddleware(...middleware(server))(createStore)(
		combineReducers({ colors }),
		initialState
	);

export default storeFactory;
