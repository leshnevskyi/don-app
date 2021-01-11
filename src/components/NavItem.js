import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';

import './NavItem.css';

export default function NavItem({title, transition}) {
	const filename = title.toLowerCase();

	const [iconSrc, setIconSrc] = useState('');
	
	import(`assets/icons/${filename}.svg`).then(module => {
		setIconSrc(`${module.default}#${filename}`);
	}).catch(err => {
		console.error(err);
	});

	const titleVariants = {
		opened: {
			opacity: 1
		},
		closed: {
			opacity: 0
		}
	}

	return (
		<NavLink to='/' className='nav_link'>
			<motion.svg 
				className='icon' 
				viewBox='0 0 50 50'
			>
				<use href={iconSrc}></use>
			</motion.svg>
			<motion.span 
				className='title' 
				transition={transition}
				variants={titleVariants}
			>
				{title}
			</motion.span>
		</NavLink>
	);
}
