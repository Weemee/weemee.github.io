import { INIT_DONE } from './types';

const defaultState = {
	init: true,
};

export default function (state = defaultState, action) {
	switch (action.type) {
		case INIT_DONE:
			return {
				...state,
				init: false,
			};
	}

	return state;
}
