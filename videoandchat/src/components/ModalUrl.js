import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
// import Grid from '@material-ui/core/Grid';
import UrlTextField from './CopyUrl';
// import Paper from '@material-ui/core';

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '1px solid #4fa4ff',
		borderRadius: '10px',
		boxShadow: theme.shadows[2],
		padding: theme.spacing(2, 4, 3)
	}
}));

const UrlModal = (props) => {
	const classes = useStyles();
	// getModalStyle is not a pure function, we roll the style only on the first render
	const [ modalStyle ] = React.useState(getModalStyle);
	const [ open, setOpen ] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const body = (
		<div style={modalStyle} className={classes.paper}>
			<h2 id="video-title">{props.name}</h2>

			<UrlTextField name={props.name} url={props.url} />

			<p id="video-description">{props.description}</p>
		</div>
	);

	return (
		<div>
			<Button type="button" onClick={handleOpen} size="small" color="primary">
				Share Url
			</Button>
			<Modal open={open} onClose={handleClose} aria-labelledby="video-title" aria-describedby="video-description">
				{body}
			</Modal>
		</div>
	);
};
export default UrlModal;
