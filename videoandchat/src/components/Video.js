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

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	}
});

export default function Video() {
	const classes = useStyles();

	return (
		<Grid xs={12} sm={6} md={3} m={2}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="140"
						image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGZgGh7q5XYZy0h2jsI6Uov3o3zcrZ6B7duMOtcQgxvkg1EXkX&usqp=CAU"
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Video Title
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							Stream Description Stream DescriptionStream DescriptionStream DescriptionStream
							DescriptionStream
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Play/Stream
					</Button>
					<Button size="small" color="primary">
						Share Static URL
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}
