import React from 'react';
import {Helmet} from 'react-helmet';
import './styles.css';

const video= document.getElementById('Stream');
class Stream extends React.Component{
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
			    <section className="select">
			      <label for="audioSource">Audio source: </label>
			      <select id="audioSource"></select>
			    </section>
			    <section className="select">
			      <label for="videoSource">Video source: </label>
			      <select id="videoSource"></select>
			    </section>
			    <video playsinline controls autoplay muted></video>
			    <Helmet>
				    <meta charset="UTF-8" />
				    <title>Broadcaster</title>
				    <script src="http://localhost:4000/socket.io/socket.io.js"></script>
				    <script src="http://localhost:4000/broadcast.js"></script>
				</Helmet>
				
			</div>
		);
	}

}
export default Stream;