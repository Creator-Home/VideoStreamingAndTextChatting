import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
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
		width: 1200,
		backgroundColor: theme.palette.background.paper,
		borderRadius: '10px',
		border: '1px solid #4fa4ff',
		boxShadow: theme.shadows[2],
		padding: theme.spacing(2, 4, 3)
	}
}));

const SimpleModal = (props) => {
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
			{/* <input type="file" accept="video/*" />
			<video controls autoplay /> */}
			<Grid container direction="row" justify="space-between" alignItems="center">
				<Grid>
					<Card>
						<video controls autoplay src="http://smoothcode.co/video/this.mp4">
							video
						</video>
					</Card>
				</Grid>
				<Card>
					<h1 style={{ padding: '50px' }}>Chat under construction</h1>
				</Card>
				<Grid />
			</Grid>
			<p id="video-description">{props.description}</p>
		</div>
	);

	return (
		<div>
			<Button type="button" onClick={handleOpen} size="small" color="primary">
				Open Video
			</Button>
			<Modal
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
				className={classes.modal}
				open={open}
				onClose={handleClose}
				aria-labelledby="video-title"
				aria-describedby="video-description"
			>
				<Fade in={open}>{body}</Fade>
			</Modal>
		</div>
	);
};
export default SimpleModal;
