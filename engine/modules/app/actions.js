import { INIT_DONE } from './types';

export function initDone() {
	return {
		type: INIT_DONE,
		payload: null,
	};
}
