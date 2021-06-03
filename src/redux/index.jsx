import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import countReducer from './reducer/countReducer';
import authReducer from './reducer/authReducer';

let reducer = combineReducers({
	auth: authReducer,
	count: countReducer,
});

// const middleWare = (store) => (next) => (action) => {
// 	if (action.type === 'INCREMENT') {
// 		action.type = 'DECREMENT';
// 		next(action);
// 	} else {
// 		next(action);
// 	}
// };
const middleWare = (store) => (next) => (action) => {
	if (typeof action === 'function') {
		return action(store.dispatch);
	} else {
		next(action);
	}
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(middleWare)));
console.log(store);
export default store;
