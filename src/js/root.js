'use strict';
import React, {Component} from 'react';
import $ from 'jquery';
import Nav from './nav';
import Profile from './profile';
import RepoList from './repoList';
import Search from './search';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName : 'cybot1711',
			userData : [],
			userRepos: [],
			perPage  : 40
		}
	}
	
	getUserData() {
		$.ajax({
			url     : 'https://api.github.com/users/' + this.state.userName + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
			dataType: 'json',
			cache   : false,
			success : function (data) {
				this.setState({userData: data})
				console.log(this.state.userData);
			}.bind(this),
			error   : function (xhr, status, err) {
				this.setState({username: null})
				alert(err);
			}.bind(this)
		});
	}
	
	getUserRepos() {
		$.ajax({
			url     : 'https://api.github.com/users/' + this.state.userName + '/repos?per_page=' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
			dataType: 'json',
			cache   : false,
			success : function (data) {
				this.setState({userRepos: data})
				console.log(this.state.userRepos);
			}.bind(this),
			error   : function (xhr, status, err) {
				this.setState({username: null})
				alert(err);
			}.bind(this)
		});
	}
	
	handleFormSubmit(username) {
		this.setState({userName: username}, function () {
			this.getUserData()
			this.getUserRepos()
		})
	}
	
	componentDidMount() {
		this.getUserData()
		this.getUserRepos()
	}
	
	render() {
		return (
			<div>
				<Nav/>
				<div className="container">
					<Search onFormSubmit={this.handleFormSubmit.bind(this)}/>
					<div className="row">
						<div className="col-md-12">
							<Profile {...this.state} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

App.checkPropTypes = {
	clientId    : React.PropTypes.string,
	clientSecret: React.PropTypes.string
};
App.defaultProps   = {
	clientId    : '009246e6177c1fb40166',
	clientSecret: 'a55a49939371585b744cf9cd6e09e8aa50539b0b'
}

export default App;