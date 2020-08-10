import React from 'react';

interface Props {
	location: any;
}

const Whoops404 = ({ location }: Props) => (
	<div className="whoops-404">
		<h1>Whoops cannot find resource at '{location.pathname}'</h1>
	</div>
);

export default Whoops404;
