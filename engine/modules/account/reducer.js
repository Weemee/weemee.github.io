import { ACCOUNT_DETAILS } from './types';

const defaultState = {
	loggedIn: false,
};

export default function (state = defaultState, action) {
	switch (action.type) {
		case ACCOUNT_DETAILS:
			return {
				...state,
				account: {
					...state.account,
					...action.payload,
				},
			};
	}

	return state;
}
