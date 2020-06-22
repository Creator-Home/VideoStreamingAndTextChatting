import React from 'react';
import {Helmet} from 'react-helmet';
import './styles.css';


class Watch extends React.Component{
	constructor(){
		super();
		this.state={
			data:[],
			url:'',
			redirect: false
		}
	}
	  componentDidMount() {
	    
	  }
	render(){
		return(
			<div>
			    <video playsinline controls autoplay muted></video>
			    <Helmet>
				    <meta charset="UTF-8" />
				    <title>Viewer</title>
				    <script src="http://localhost:4000/socket.io/socket.io.js"></script>
				    <script src="http://localhost:4000/watch.js"></script>
				</Helmet>
				
			</div>
		);
	}

}
export default Watch;