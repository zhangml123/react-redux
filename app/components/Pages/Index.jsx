import React, { Component, PropTypes } from 'react'
import * as CounterActions from '../../actions/counterAction'
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import {Link} from "react-router/es";

class Index extends Component {

	render() {
		return(
			<div>Index1<br/><Link to={`/setting`} >setting</Link></div>
		)
	}

}

export default connect(
	(state)=>{
		return {
			
		}
	},
	(dispatch) =>{

	 	return bindActionCreators(CounterActions, dispatch)

	})(Index)