import {createSlice, nanoid} from '@reduxjs/toolkit';

function createTodo() {
	return {
		id: nanoid(),
		task: '',
		timeLimit: null,
		isCompleted: false,
		isDeleted: false,
	}
}

const initialState = {
	todos: [],
}

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo(state) {
			state.todos.push(createTodo());
		},
		editTodoTask(state, {payload: {id, task}}) {
			const todo = state.todos.find(todo => todo.id === id);

			todo.task = task;
		},
		toggleTodoIsCompleted(state, {payload: id}) {
			const todo = state.todos.find(todo => todo.id === id);

			todo.isCompleted = !todo.isCompleted;
		},
		deleteTodo(state, {payload: id}) {
			const todo = state.todos.find(todo => todo.id === id);

			todo.isDeleted = true;
		},
	},
});

export const {
	addTodo, 
	deleteTodo, 
	toggleTodoIsCompleted,
	editTodoTask,
} = todosSlice.actions;

export const selectAllTodos = state => state.todos.todos;
export const selectActiveTodos = state => {
	return state.todos.todos.filter(({isDeleted}) => !isDeleted);
}

export default todosSlice.reducer;