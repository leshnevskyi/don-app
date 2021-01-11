import {configureStore} from '@reduxjs/toolkit';

import navigationReducer from 'stateSlices/navigationSlice';
import todosReducer from 'stateSlices/todosSlice'

export default configureStore({
	reducer: {
		navigation: navigationReducer,
		todos: todosReducer,
	}
});