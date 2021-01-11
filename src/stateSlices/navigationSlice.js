import {createSlice, nanoid} from '@reduxjs/toolkit';

export function createNavItem(title) {
	return {
		id: nanoid(),
		title,
	}
}

const titles = ['Calendar', 'Trash', 'Notes', 'Settings'];
const navItems = titles.map(title => createNavItem(title));

const initialState = {
	isOpened: false,
	navItems,
}

const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		toggle(state) {
			state.isOpened = !state.isOpened
		}
	},
});

export const {toggle} = navigationSlice.actions;

export const selectNav = state => state.navigation;
export const selectIsOpened = state => state.navigation.isOpened;

export default navigationSlice.reducer;