import React from 'react';
import Color from './Color';
import '../../stylesheets/ColorList.scss';

interface Props {
	colors: Array<{
		id: string;
		rating: number;
		title: string;
		color: string;
		timestamp: string;
	}>;
	onRate: (id: string, rating: number) => void;
	onRemove: (id: string) => void;
}

const ColorList = ({ colors = [], onRate, onRemove }: Props) => (
	<div className="color-list">
		{colors.length === 0 ? (
			<p>No Colors Listed. (Add a Color)</p>
		) : (
			colors.map((color) => (
				<Color
					key={color.id}
					{...color}
					onRate={(rating: number) => onRate(color.id, rating)}
					onRemove={() => onRemove(color.id)}
				/>
			))
		)}
	</div>
);

export default ColorList;
