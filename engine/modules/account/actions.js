import {
	ACCOUNT_DETAILS,
	ACCOUNT_DETAILS_GET,
	ACCOUNT_DETAILS_UPDATE,
	ACCOUNT_DETAILS_DELETE,
	ACCOUNT_DISCONNECT,
} from './types';

export function deleteAccount(accountID, authToken) {
	return {
		type: ACCOUNT_DETAILS_DELETE,
		payload: {
			accountID,
			authToken,
		},
	};
}

export function getAccountDetails(accountID, authToken) {
	return {
		type: ACCOUNT_DETAILS_GET,
		payload: {
			accountID,
			authToken,
		},
	};
}

export function saveAccountDetails(accountDetails) {
	return {
		type: ACCOUNT_DETAILS,
		payload: accountDetails,
	};
}

export function updateAccount(accountID, authToken, details) {
	return {
		type: ACCOUNT_DETAILS_UPDATE,
		payload: {
			accountID,
			authToken,
			details,
		},
	};
}

export function disconnected() {
	return {
		type: ACCOUNT_DISCONNECT,
		payload: undefined,
	};
}
