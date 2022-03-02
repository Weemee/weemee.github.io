import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import AppReducer from './modules/app/reducer';
import AccountReducer from './modules/account/reducer';

const rootReducer = (history) =>
	combineReducers({
		account: AccountReducer,
		app: AppReducer,
		router: connectRouter(history),
	});

export default rootReducer;
