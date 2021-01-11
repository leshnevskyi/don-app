import React from 'react';
import {useDispatch} from 'react-redux';

import {addTodo} from 'stateSlices/todosSlice'

import Button from './Button';
import PlusIcon from './PlusIcon';

import './AddTodoBtn.css'

export default function AddTodoBtn() {
	const dispatch = useDispatch();

	function handleClick() {
		dispatch(addTodo());
	}

	return (
		<Button 
			aria-label='Add todo item.'
			className='add_todo_btn'
			onClick={handleClick}
		>
			<PlusIcon/>
		</Button>
	);
}