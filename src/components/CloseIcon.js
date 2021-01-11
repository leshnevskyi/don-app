import React from 'react';
import {motion} from 'framer-motion';

import './CloseIcon.css';

export default function CloseIcon({isClicked}) {
	const customProps = {
		topElTf: '--top-el-transformation',
		bottomElTf: '--bottom-el-transformation',
	}

	const variants = {
		default: {
			[customProps.topElTf]: 'rotate(-45deg)',
			[customProps.bottomElTf]: 'rotate(45deg)',
			opacity: 1,
		},
		folded: {
			[customProps.topElTf]: 'rotate(-0deg)',
			[customProps.bottomElTf]: 'rotate(0deg)',
			opacity: 0,
		}
	}

	return (
		<motion.span
			className='close_icon'
			initial='folded'
			animate={isClicked ? 'folded' : 'default'}
			variants={variants}
			transition={{duration: 0.1}}
		/>
	);
}
