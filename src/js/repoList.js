'use strict';
import React, {Component} from 'react';
import Repo from './repo';
class RepoList extends Component {
	render() {
		return (
			<div>
				<h2>Repos</h2>
				<ul className="list-group">
					{
						this.props.userRepos.map(repo => {
							return (
								<Repo
									repo={repo}
									key={repo.id}
									{...this.props}
								/>
							)
						})
					}
				</ul>
			</div>
		);
	}
}

export default RepoList;