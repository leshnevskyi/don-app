import React from 'react';
import {NavLink} from 'react-router-dom';

import './Header.css';

import CurrentDate from './CurrentDate';
import ToggleNavBtn from './ToggleNavBtn';
import Logo from './Logo';

export default function Header() {
	return (
		<header className="header">
			<ToggleNavBtn/>
			<CurrentDate/>
			<NavLink to="/" className="logo">
				<Logo/>
			</NavLink>
		</header>		
	);
}
