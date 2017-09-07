import React, { Component, PropTypes } from 'react'
import * as CounterActions from '../actions/counterAction'
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';

class Setting extends Component {

	render() {
		return(
			<div>Setting</div>
		)
	}

}


export default connect(
	(state)=>{
		return {
			Setting: state.Setting
		}
	},
	(dispatch) =>{

	 	return bindActionCreators(CounterActions, dispatch)

})(Setting)