import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch'
		}
	}
}));

const UrlTextField = (props) => {
	const classes = useStyles();

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<Typography>Share Video Url</Typography>
			<TextField
				size={'small'}
				id="outlined-basic"
				label="Video Url"
				defaultValue={props.url}
				variant="outlined"
			/>
		</form>
	);
};
export default UrlTextField;
