import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import UrlModal from './ModalUrl';

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	}
});
const handleClick = () => {
	console.log('Event fired');
};

const Video = (props) => {
	const classes = useStyles();

	return (
		<Grid xs={12} sm={5} md={3} m={2}>
			<div style={{ margin: '8px' }}>
				<Card className={classes.root}>
					<CardActionArea onClick={handleClick}>
						<CardMedia
							component="img"
							alt="Video stream thumbnail"
							height="140"
							image="https://picsum.photos/200"
							title="Video stream thumbnail"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{props.name}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{props.children}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button onClick={handleClick} size="small" color="primary">
							<NavLink to="/videostream">Open Stream</NavLink>
						</Button>

						<Button onClick={handleClick} size="small" color="primary">
							Share Static URL
						</Button>
					</CardActions>
				</Card>
			</div>
		</Grid>
	);
};
export default Video;
