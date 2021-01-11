import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import classNames from 'classnames';
import {motion} from 'framer-motion';

import {selectNav} from 'stateSlices/navigationSlice';

import {useCustomFocus} from 'hooks/useCustomFocus';

import NavItem from './NavItem';

import './Navigation.css';

export default function Navigation() {
	const {isOpened, navItems} = useSelector(selectNav);

	const itemVariants = {
		opened: {
			x: 0,
			y: 0,
		},
		closed: {
			x: '-100%',
			y: -5,
		},
	}

	const containerVariants = {
		opened: {
			transition: {
				staggerChildren: 0.07,
				delayChildren: 0.15,
			},
		},
		closed: {
			transition: {
				staggerChildren: 0.085,
				staggerDirection: -1,
				delayChildren: 0,
			},
		},
	}

	const transition = {
		duration: 0.7, 
		ease: [0.3, 0.28, 0, 0.99],
	}

	const className = classNames('nav_section', {
		'opened': isOpened,
	});

	const focusEvents = useCustomFocus();

	const renderedNavItems = navItems.map(({id, title}) => {
		return (
			<motion.li 
				key={id} 
				className='nav_item'
				variants={itemVariants}
				transition={transition}
				{...focusEvents}
			>
				<NavItem title={title} transition={transition}/>
			</motion.li>
		);
	});

	const [gradientXPos, setGradientXPos] = useState(0);

	function updateGradientXPos(e) {
		setGradientXPos(e.clientX);
	}

	return (
		<nav className={className}>
			<motion.ul 
				style={{'--gradient-x-pos': `${gradientXPos}px`}}
				className='nav_items_list' 
				tabIndex={isOpened ? 0 : -1}
				initial='closed'
				animate={isOpened ? 'opened' : 'closed'}
				variants={containerVariants}
				onMouseMove={updateGradientXPos}
			>
				{renderedNavItems}
			</motion.ul>
		</nav>
	);
}
