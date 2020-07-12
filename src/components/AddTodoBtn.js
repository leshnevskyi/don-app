import React from 'react';
import PlusIcon from './PlusIcon';

import './AddTodoBtn.css'

export default function AddTodoBtn() {
	function handleClick(e) {
		blur(e);
	}

	function focus(e) {
		e.target.focus();
	}

	function blur(e) {
		e.target.blur();
	}

	return (
		<button 
		aria-label="Add todo item"
		type="button" 
		className="add_todo" 
		onClick={handleClick}
		onMouseLeave={blur}
		onTouchStart={focus}
		onTouchEnd={handleClick}>
			<PlusIcon/>
		</button>
	);
}