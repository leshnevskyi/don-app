import React from 'react';
import {useDispatch} from 'react-redux';

import {toggle} from 'stateSlices/navigationSlice'; 

import NavIcon from './NavIcon';
import Button from './Button';

import './ToggleNavBtn.css';

export default function ToggleNavBtn() {
	const dispatch = useDispatch();

	function handleNavToggling() {
		dispatch(toggle());
	}

	return (
		<Button 
			className='toggle_nav_btn' 
			onClick={handleNavToggling} 
		>
			<NavIcon/>
			<span className='label'>Menu</span>
		</Button>
	);
}
