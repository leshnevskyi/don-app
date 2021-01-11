import React from 'react';
import {AnimatePresence} from 'framer-motion';
import {useDispatch, useSelector} from 'react-redux';

import {
	selectActiveTodos, 
	deleteTodo, 
	toggleTodoIsCompleted,
	editTodoTask,
} from 'stateSlices/todosSlice'

import TodoItem from './TodoItem';

import './TodoList.css';

export default function TodoList() {
	const todos = useSelector(selectActiveTodos);

	const dispatch = useDispatch();

	const renderedTodoItems = todos.map(({id, task, isCompleted}) => (
		<li className='todo_item' key={id}>
			<TodoItem 
				task={task}
				isCompleted={isCompleted}
				deleteTodo={() => dispatch(deleteTodo(id))}
				toggleTodoIsCompleted={() => dispatch(toggleTodoIsCompleted(id))}
				editTodoTask={(task) => dispatch(editTodoTask({id, task}))}
			/>
		</li>
	));

	return (
		<main>
			<ul className='todo_list'>
				<AnimatePresence>
					{renderedTodoItems}
				</AnimatePresence>
			</ul>
		</main>
	);
}
