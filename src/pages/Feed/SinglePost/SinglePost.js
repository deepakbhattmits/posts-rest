/** @format */

import React, { Component } from 'react';

import Image from '../../../components/Image/Image';
import './SinglePost.css';

class SinglePost extends Component {
	state = {
		title: '',
		author: '',
		date: '',
		image: '',
		content: '',
	};

	componentDidMount() {
		const postId = this.props.match.params.postId;
		fetch(`/feed/post/${postId}`, {
			headers: {
				Authorization: `Bearer ${this.props.token}`,
			},
		})
			.then((res) => {
				if (res.status !== 200) {
					throw new Error('Failed to fetch status');
				}
				return res.json();
			})
			.then((resData) => {
				const { title, imageUrl, createdAt, content } = resData.post;
				this.setState({
					title: title,
					author: resData.post.creator.name,
					image: `/${imageUrl}`,
					date: new Date(createdAt).toLocaleDateString('en-US'),
					content: content,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<section className='single-post'>
				<h1>{this.state.title}</h1>
				<h2>
					Created by {this.state.author} on {this.state.date}
				</h2>
				<div className='single-post__image'>
					<Image contain imageUrl={this.state.image.toString()} />
				</div>
				<p>{this.state.content}</p>
			</section>
		);
	}
}

export default SinglePost;
