import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface InitialState {
	token: null | string;
	isAuthenticated: boolean;
	role: string;
}

const initialState: InitialState = {
	token: Cookies.get('token') || null,
	isAuthenticated: false,
	role: 'user',
};
const tokenSlice = createSlice({
	name: 'token',
	initialState: initialState,
	reducers: {
		login(state, action: PayloadAction<string>) {
			state.token = action.payload;
			state.isAuthenticated = true;
			Cookies.set('token', action.payload, {
				expires: 365,
				secure: true,
				sameSite: 'strict',
			});
		},
		logout(state) {
			state.token = null;
			state.isAuthenticated = false;
			Cookies.remove('token');
		},
	},
});

export const TokenReducer = tokenSlice.reducer;
export const { login, logout } = tokenSlice.actions;
