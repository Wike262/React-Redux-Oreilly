import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import '../../stylesheets/Menu.scss';

const selectedStyle = { color: 'red' };

interface Props {
	sort: string;
}

const Menu = ({ sort }: Props) => (
	<nav className="menu">
		<Link to="/" activeStyle={sort === '/' ? selectedStyle : {}}>
			date
		</Link>
		<Link to="/sort/title" activeStyle={selectedStyle}>
			title
		</Link>
		<Link to="/sort/rating" activeStyle={selectedStyle}>
			rating
		</Link>
	</nav>
);

export default Menu;
