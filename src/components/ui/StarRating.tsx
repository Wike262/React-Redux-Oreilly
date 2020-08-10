import React from 'react';
import Star from './Star';

interface Props {
	starsSelected: number;
	totalStars?: number;
	onRate: (star: number) => void;
}

const StarRating = ({ starsSelected = 0, totalStars = 5, onRate }: Props) => (
	<div className="star-rating">
		{[...Array(totalStars)].map((n, i) => (
			<Star key={i} selected={i < starsSelected} onClick={() => onRate(i + 1)} />
		))}
		<p>
			{starsSelected} of {totalStars} stars
		</p>
	</div>
);

export default StarRating;
