/* Core */
import React, { useState, useEffect, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import clsx from 'clsx';

/* Actions */
import { initDone } from './actions';
import {} from '../account/actions';

/* Components */
import Home from '../home';
import { Colour } from './colours';

/* Material UI */
import { makeStyles, styled } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const MenuButton = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	fontSize: 16,
	padding: '6px 12px',
	border: '1px solid',
	lineHeight: 1.5,
	backgroundColor: Colour.alpha,
	borderColor: Colour.alpha,
	color: `${Colour.black} !important`,
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
	'&:hover': {
		//backgroundColor: '#0069d9',
		//borderColor: '#0062cc',
		//boxShadow: 'none',
		//textDecoration: 'underline',
	},
	'&:active': {
		//boxShadow: 'none',
	},
	'&:focus': {
		//boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
	},
});

const useStyles = makeStyles(() => ({
	root: {
		background: '#fff',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
	},
	mainContent: {
		width: '80vw',
		background: 'repeating-linear-gradient(-90deg, #fff5f5 0px 60px, transparent 60px 70px)',
		paddingTop: 20,
	},
	header: {
		height: 102,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBottom: 50,
	},
	logo: {
		position: 'relative',
		minWidth: 250,
		maxWidth: 250,
		minHeight: 102,
		maxHeight: 102,
	},
	square: {
		width: 17,
		height: 17,
		float: 'right',
		display: 'block',
	},
	footer: {
		minHeight: '10vh',
		width: '100vw',
		background: Colour.black,
		color: Colour.white,
		display: 'flex',
		justifyContent: 'center',
		marginTop: 20,
	},
	headerMenu: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '40vw',
	},
	menuItem: {
		textTransform: 'uppercase !important',
		paddingBottom: '5px !important',
	},
	menuActive: {
		color: `${Colour.pink} !important`,
		borderBottom: `2px solid ${Colour.pink} !important`,
		paddingBottom: '3px !important',
	},
}));

const theme = createTheme({
	props: {
		MuiButtonBase: {
			disableRipple: true,
		},
	},
});

const App = (props) => {
	const classes = useStyles();

	const [navigation, setNavigation] = useState('home');

	const getContent = () => {
		switch (navigation) {
			case 'home':
				return <Home />;

			default:
				return false;
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<div className={classes.mainContent}>
					<div className={classes.header}>
						<div className={classes.logo}>
							<img style={{ position: 'absolute' }} src='../../images/Logo-sinclairs.jpg' />
							<div style={{ position: 'absolute', right: 0, width: 51 }}>
								<div className={classes.square} style={{ background: Colour.alpha }} />
								<div className={classes.square} style={{ background: Colour.pink }} />
								<div className={classes.square} style={{ background: Colour.orange }} />
								<div className={classes.square} style={{ background: Colour.purple }} />
							</div>
							<div
								style={{
									position: 'absolute',
									width: '100%',
									textAlign: 'center',
									bottom: 17,
									fontSize: 12,
									paddingLeft: 25,
								}}>
								PRIVATLEKTIONER
							</div>
						</div>

						<div className={classes.headerMenu}>
							<div>
								<MenuButton
									disableRipple
									variant='text'
									onClick={() => setNavigation('home')}
									className={clsx(classes.menuItem, { [classes.menuActive]: navigation === 'home' })}>
									Start
								</MenuButton>
							</div>

							<div>
								<MenuButton
									disableRipple
									variant='text'
									onClick={() => setNavigation('book')}
									className={clsx(classes.menuItem, { [classes.menuActive]: navigation === 'book' })}>
									Boka
								</MenuButton>
							</div>

							<div>
								<MenuButton
									disableRipple
									variant='text'
									onClick={() => setNavigation('price')}
									className={clsx(classes.menuItem, { [classes.menuActive]: navigation === 'price' })}>
									Priser
								</MenuButton>
							</div>

							<div>
								<MenuButton
									disableRipple
									variant='text'
									onClick={() => setNavigation('login')}
									className={clsx(classes.menuItem, { [classes.menuActive]: navigation === 'login' })}>
									Login / Mina sidor
								</MenuButton>
							</div>
						</div>
					</div>

					{getContent()}
				</div>

				<div className={classes.footer}>Footer</div>
			</div>
		</ThemeProvider>
	);
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
