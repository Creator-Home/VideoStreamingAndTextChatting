import React from 'react';
import Grid from '@material-ui/core/Grid';
import ChatF from './ChatF';
const mystyle = {
	marginbottom: '30px',
	maxwidth: '400px',
	margintop: '40px'
};
const vidstyle = {
	margin: '2%'
};
const Videostream = () => {
	return (
		<div>
			{/* <input type="file" accept="video/*" />
			<video controls autoplay /> */}
			<Grid container direction="row" justify="flex-start" alignItems="center">
				<Grid xs={12} sm={6} md={6}>
					<video style={vidstyle} controls autoplay src="http://smoothcode.co/video/this.mp4" />
					<Grid style={vidstyle}>
						<h2 style={vidstyle} id="video-title">
							props.name
						</h2>
						<p id="video-description">desc</p>
					</Grid>
				</Grid>

				<Grid style={mystyle} xs={12} sm={4} md={4}>
					<ChatF />
				</Grid>
			</Grid>
		</div>
	);
};

export default Videostream;
