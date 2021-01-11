import React from 'react';
import {useSelector} from 'react-redux';
import {motion} from 'framer-motion';

import {selectIsOpened} from 'stateSlices/navigationSlice';

import './NavIcon.css';

export default function NavIcon() {
	const isOpened = useSelector(selectIsOpened);

	const customProps = {
		topElTf: '--top-el-transformation',
		bottomElTf: '--bottom-el-transformation',
	}

	const variants = {
		opened: {
			[customProps.topElTf]: [
				null, 
				'translate(0%, 0%) rotate(0deg)', 
				'translate(0%, 0%) rotate(-45deg)',
			],
			[customProps.bottomElTf]: [
				null, 
				'translate(0%, 0%) rotate(0deg)', 
				'translate(0%, 0%) rotate(45deg)',
			]
		},
		closed: {
			[customProps.topElTf]: [
				null, 
				'translate(0%, 0%) rotate(0deg)', 
				'translate(25%, -100%) rotate(0deg)',
			],
			[customProps.bottomElTf]: [
				null, 
				'translate(0%, 0%) rotate(0deg)', 
				'translate(-25%, 100%) rotate(0deg)',
			]
		}
	}

	return (
		<motion.span 
			className='nav_icon' 
			tabIndex='-1'
			initial= 'closed'
			animate={isOpened ? 'opened' : 'closed'}
			variants={variants}
			transition={{
					duration: 0.7, 
					ease: [0.3, 0.28, 0, 0.99]
			}}
		>
		</motion.span>
	);
}
