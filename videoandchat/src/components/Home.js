// import React from 'react';
// import MainApp from './MainApp';
// const home = () => {
// 	return (
// 		<div>
// 			<MainApp />
// 		</div>
// 	);
// };

// export default home;

import React, { Component } from 'react'
import MainApp from './MainApp';

const Loading =()=>
  <div className="loading">
    <div></div>
    <div></div>
  </div>  

export class Home extends Component {
	state = {
		loading: true,
	  };
	  
	  componentDidMount(){
		this.isLoading = setTimeout(()=>{this.setState({loading: false})}, 2300);
	  }
	  componentWillUnmount() {
		 clearTimeout(this.isLoading);
	  }
	  
	  timer = () => setTimeout(()=>{
		this.setState({loading: false})
	  }, 2300);
	
	render() {
		const {loading} = this.state;
		return (
			loading ? (<Loading/>)
      		:(<div className="content">
          		<MainApp/>
     		 </div>)
		)
	}
}

export default Home

