import React from 'react';
import '../../stylesheets/Star.scss';

interface Props {
	selected: boolean;
	onClick: () => void;
}

const Star = ({ selected = false, onClick }: Props) => (
	<div className={selected ? 'star selected' : 'star'} onClick={onClick}></div>
);

export default Star;
