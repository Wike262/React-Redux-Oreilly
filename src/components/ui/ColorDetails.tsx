import React from 'react';
import Whoops404 from './Whoops404';
import '../../stylesheets/ColorDetails.scss';

interface Props {
	title: string;
	color: string;
	history: any;
	location: string;
}

const ColorDetails = ({ title, color, history, location }: Props) =>
	color ? (
		<Whoops404 location={location} />
	) : (
		<div
			className="color-details"
			style={{ backgroundColor: color }}
			onClick={() => history.goBack()}
		>
			<h1>{title}</h1>
			<h1>{color}</h1>
		</div>
	);

export default ColorDetails;
