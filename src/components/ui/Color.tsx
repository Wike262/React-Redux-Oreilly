import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import StarRating from './StarRating';
import TimeAgo from './TimeAgo';
import { FaTrash } from 'react-icons/fa';
import '../../stylesheets/Color.scss';

interface PathParamsType {
	history?: any;
}

type PropsType = RouteComponentProps<PathParamsType> & {
	id: string;
	title: string;
	color: string;
	rating: number;
	timestamp: string;
	onRemove: () => void;
	onRate: (rating: number) => void;
	history: any;
};

class Color extends Component<PropsType> {
	render() {
		const {
			id,
			title,
			color,
			rating,
			timestamp,
			onRemove,
			onRate,
			history,
		} = this.props;
		return (
			<section className="color">
				<h1 ref="title" onClick={() => history.push(`/${id}`)}>
					{title}
				</h1>
				<button onClick={onRemove}>
					<FaTrash />
				</button>
				<div
					className="color"
					onClick={() => history.push(`/${id}`)}
					style={{ backgroundColor: color }}
				></div>
				<TimeAgo timestamp={timestamp} />
				<div>
					<StarRating starsSelected={rating} onRate={onRate} />
				</div>
			</section>
		);
	}
}

export default withRouter(Color);
