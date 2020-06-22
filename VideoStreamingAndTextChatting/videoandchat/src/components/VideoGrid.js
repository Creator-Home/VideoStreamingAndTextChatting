import React from 'react';
import { spacing } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Video from './Video';
// import { useBouncyShadowStyles } from './Bounce';
// import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		height: 140,
		width: 100
	},
	control: {
		padding: theme.spacing(2)
	}
}));
const theme = {
	spacing: 8
};
export default function VideoGrid() {
	const [ spacing, setSpacing ] = React.useState(4);
	const classes = useStyles();
	const handleChange = (event) => {
		setSpacing(Number(event.target.value));
	};

	return (
		<Grid container className={classes.root}>
			<Grid item justify="center" alignItems="center" md={12}>
				<Grid container>
					<Video name="vide stream 0" marginBottom={10} />
					<Video name="vide stream 1" />
					<Video name="vide stream 2" />
					<Video name="vide stream 3" />
					<Video name="vide stream 4" />
				</Grid>
				<Grid container direction="column" justify="center" alignItems="center" />
			</Grid>
		</Grid>
	);
}
