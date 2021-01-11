import React, {useState} from 'react';

import Button from './Button';
import CloseIcon from './CloseIcon';

import './DeleteTodoBtn.css'

export default function DeleteTodoBtn({deleteTodo}) {
	const [isClicked, setIsClicked] = useState(false);

	function handleClick() {
		setIsClicked(true);
		deleteTodo();
	}

	return (
		<Button
			className='delete_todo_btn'
			aria-label='Delete todo item.'
			onClick={handleClick}
		>
			<CloseIcon 
				isClicked={isClicked}
			/>
		</Button>
	);
}
