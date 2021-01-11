import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Navigation from './components/Navigation';
import TodoList from './components/TodoList';
import AddTodoBtn from './components/AddTodoBtn';

function App() {
	return (
		<BrowserRouter>
			<Header/>
			<Navigation/>
			<Switch>
				<Route exact path={['/', '/todo-list']}>
					<TodoList/>
					<AddTodoBtn/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
