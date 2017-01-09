'use strict';
import React, {Component} from 'react';
import RepoList from './repoList';
class Profile extends Component {
	render() {
		return (
			<div className="panel panel-success">
				<div className="panel-heading">
					<h1 className="panel-title">{this.props.userData.name}</h1>
				</div>
				<div className="panel-body">
					<div className="row">
						<div className="col-md-4">
							<img src={this.props.userData.avatar_url} className="thumbnail" style={{width: "100%"}}
							     alt=""/>
						</div>
						<div className="col-md-8">
							<div className="row">
								<div className="col-md-12">
									<span className="label label-primary">{this.props.userData.public_repos}
										Repos</span>
									<span className="label label-success">{this.props.userData.public_gists} Public Gists</span>
									<span className="label label-info">{this.props.userData.followers} Followers</span>
									<span className="label label-danger">{this.props.userData.following}
										Following</span>
								</div>
							</div>
							<hr/>
							<div className="row">
								<div className="col-md-12">
									<ul className="list-group">
										<li className="list-group-item">
											<strong>Username: </strong>{this.props.userData.login}</li>
										<li className="list-group-item">
											<strong>Location: </strong>{this.props.userData.location}</li>
										<li className="list-group-item"><strong>E-Mail
											Address: </strong>{this.props.userData.email}</li>
									</ul>
								</div>
							</div>
							<br/>
							<a href={this.props.userData.html_url} className="btn btn-success pull-right"
							   target="_blank">Take me</a>
						</div>
						<hr/>
					</div>
					<hr/>
					<div className="row">
						<div className="col-md-12">
							<RepoList userRepos={this.props.userRepos} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;