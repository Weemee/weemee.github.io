/* Core */
import React, { useState, useEffect, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* Actions */
import {} from './actions';

/* Components */
import { Colour } from '../app/colours';

/* Material UI */
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	area: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	middleBox: {
		flex: 0.3,
		display: 'flex',
		background: Colour.lightGray,
		flexDirection: 'column',
		padding: 20,
	},
	boxTitle: {
		fontWeight: 'bold',
		paddingBottom: 10,
		fontSize: 18,
		textTransform: 'uppercase',
	},
	boxContent: {
		paddingBottom: 10,
		lineHeight: 1.5,
		minHeight: 137,
		maxHeight: 137,
		textOverflow: 'ellipsis',
	},
	boxBottom: {
		paddingTop: 10,
		fontWeight: 'bold',
	},
}));

const Home = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.area} style={{ flexDirection: 'column' }}>
				<div style={{ padding: 20, paddingBottom: 40, fontSize: 32, fontWeight: 'bold' }}>Träna med en dans-PT</div>

				<div style={{ maxWidth: 500, textAlign: 'center', paddingBottom: 20, lineHeight: 1.5 }}>
					Personlig dansläraren tar fram danssteg och program som är utformade för dig, samtidigt som du får stöd
					och motivation längs vägen. Du kommer nå nya nivåer och mål efter ditt behov.
				</div>

				<div style={{ padding: 20 }}>
					<Button
						variant='contained'
						disableRipple
						sx={{
							textTransform: 'uppercase',
							backgroundColor: Colour.lightBlue,
							width: 350,
							height: 70,
							fontSize: 20,
						}}>
						Boka privatlektioner
					</Button>
				</div>
			</div>

			<div className={classes.area} style={{ flexDirection: 'column', paddingBottom: 50 }}>
				<div style={{ width: '100%', marginTop: 70 }}>VI ERBJUDER PRIVATLEKTIONER INOM BLAND ANNAT...</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '100%',
						marginTop: 20,
					}}>
					<div className={classes.middleBox}>
						<div className={classes.boxTitle}>Tävlingsdans</div>
						<div className={classes.boxContent}>
							Låt dig guidas av våra danslärare mot en trygg och glädjefylld framtid på tävlingsgolvet.
							<br />
							<br />
							Vi lär dig bli bäst inför tävling!
						</div>
						<div className={classes.boxBottom}>{'Läs mer >>'}</div>
					</div>

					<div className={classes.middleBox}>
						<div className={classes.boxTitle}>Bröllopsdans</div>
						<div className={classes.boxContent}>
							Dags för bröllop och stunden då ni som äkta makar ska framföra er bröllopsdans? Vi lär er de rätta
							stegen!
							<br />
							<br />
						</div>
						<div className={classes.boxBottom}>{'Läs mer >>'}</div>
					</div>

					<div className={classes.middleBox}>
						<div className={classes.boxTitle}>pro-am</div>
						<div className={classes.boxContent}>
							Pro/Am är för dig som vill dansa tillsammans med en professionell dansare. Här hittar du din
							danspartner, coach och koreograf.
							<br />
							<br />
							Let’s dance!
						</div>
						<div className={classes.boxBottom}>{'Läs mer >>'}</div>
					</div>
				</div>
			</div>

			<div className={classes.area} style={{ justifyContent: 'space-between' }}>
				<div
					style={{
						flex: 0.4,
						height: 220,
						backgroundColor: Colour.lightGray,
					}}></div>

				<div style={{ flex: 0.45, display: 'flex', flexDirection: 'column' }}>
					<div style={{ textTransform: 'uppercase', fontSize: 30, fontWeight: 'bold', paddingBottom: 30 }}>
						Paketerbjudanden
					</div>

					<div style={{ lineHeight: 1.3 }}>
						Vi på Sinclairs ger dig möjligheten att boka paket med 5, 10 eller 20 privatlektioner. Detta ger dig
						som kund ett bättre pris per tillfälle, och möjliggör även för dig och din lärare att lägga upp en
						bättre plan för att nå maximalt resultat. Ska det kanske även stå något om att kunna använda paketet i
						både solo, duo och grupp eller något liknande?
					</div>

					<div style={{ marginTop: 30 }}>
						<Button
							variant='contained'
							disableRipple
							sx={{
								textTransform: 'uppercase',
								backgroundColor: Colour.darkGray,
								width: 250,
								height: 45,
								fontSize: 20,
								color: Colour.black,
							}}>
							Se priser
						</Button>
					</div>
				</div>
			</div>
		</div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
