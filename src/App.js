import React from 'react';

import Header from './components/Header';
import Navigation from './components/Navigation';
import TodoList from './components/TodoList';
import Sidebar from './components/Sidebar';
import AddTodoBtn from './components/AddTodoBtn';

function App() {
	return (
		<>
			<Header/>
			<Navigation/>
			<TodoList/>
			<Sidebar/>
			<AddTodoBtn/>
		</>
	);
}

export default App;
