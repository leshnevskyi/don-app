import React, {useState} from 'react';
import {motion} from 'framer-motion';
import classNames from 'classnames';
import Timer from 'utils/timer'

import DeleteTodoBtn from './DeleteTodoBtn';
import {ReactComponent as StopwatchIcon} from 'assets/icons/stopwatch.svg';

import './TodoItem.css';

export default function TodoItem({
	task,
	isCompleted,
	deleteTodo, 
	toggleTodoIsCompleted,
	editTodoTask,
}) {
	const [isActive, setIActive] = useState(false);
	
	const placeholder = 'Type in your task...';

	function handleChange(e) {
		editTodoTask(e.target.value);
	}

	function handleFocus() {
		setIActive(true);
	}

	function handleBlur() {
		setIActive(false);

		if (task.replace(/\s/g, '') === '') {
			deleteTodo();
		}
	}

	const className = classNames('task_editor', {
		'active': isActive,
		'completed_task': isCompleted,
	});

	const containerVariants = {
		hidden: {
			height: 0,
			opacity: 1,
			marginBottom: '0em',
		},
		visible: {
			height: '5.5em',
			opacity: 1,
			marginBottom: '1.7em',
		},
		deleted: {
			height: 0,
			marginBottom: '0em',
			opacity: 0,
			transition: {
				delay: 0.15,
			},
		},
	}

	const checkboxVariants = {
		hidden: {
			scale: 0,
		},
		visible: {
			scale: 1,
			transition: {
				delay: 0.15,
			},
		}
	}

	const inputVariants = {
		hidden: {
			opacity: 0,
			transition: {
				delay: 0.3,
			},
		},
		visible: {
			opacity: 1,
		}
	}

	return (	
		<motion.div 
			className={className}
			initial='hidden'
			animate='visible'
			exit='deleted'
			variants={containerVariants}
		>
			<div 
				className='checkbox_wrapper'
				onClick={toggleTodoIsCompleted}
			>
				<motion.input 
					className='checkbox'
					type='checkbox' 
					checked={isCompleted}
					readOnly={true}
					aria-label='Mark as comleted'
					initial='hidden'
					animate='visible'
					exit='hidden'
					variants={checkboxVariants}
				/>
			</div>
			<motion.input 
				className='task_input'
				type='text'
				value={task}
				placeholder={placeholder}
				autoFocus={true}
				spellCheck={false}
				aria-label='Edit the task'
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				initial='hidden'
				animate='visible'
				exit='hidden'
				variants={inputVariants}
			/>
			<DeleteTodoBtn deleteTodo={deleteTodo}/>
			<motion.div 
				className='task_state'
				initial='hidden'
				animate='visible'
				exit='hidden'
				variants={inputVariants}
			>
				<div className='timer'>
					<button className='set_timer_btn'>
						<StopwatchIcon className='icon'/>
						<span className='caption'>
							Set timer
						</span>
					</button>
					<time 
						className='time_left' 
						dateTime=''
					>

					</time>
					<time
						className='time_limit' 
						dateTime=''
					>

					</time>
				</div>
				{isCompleted && 
					<span>Done!</span>
				}
			</motion.div>
		</motion.div>
	);
}
