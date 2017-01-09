'use strict';
import React, {Component} from 'react';
class Search extends Component {
	onSubmit(e){
		e.preventDefault()
		console.log('submitted')
		let username = this.refs.username.value.trim()
		console.log(username)
		if(!username){
			alert("please enter valid username")
			return
		}
		this.props.onFormSubmit(username)
		this .refs.username.value = ''
	}
	render() {
		const {repo} = this.props;
		return (
			<div>
				<form onSubmit={this.onSubmit.bind(this)}>
					<label htmlFor="">Search Github Users</label>
					<input type="text" ref='username' className="form-control"/>
				</form>
			</div>
		);
	}
}

export default Search;