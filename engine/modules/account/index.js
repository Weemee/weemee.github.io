/* Core */
import React, { useState, useEffect, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* Actions */
import { initDone } from './actions';
import {} from '../account/actions';

/* Components */

/* Material UI */
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
	root: {
		//
	},
}));

const Account = (props) => {
	const classes = useStyles();

	return <div>Account</div>;
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			//
		},
		dispatch,
	);
}

function mapStateToProps(state) {
	return {
		/* App */
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Account));
