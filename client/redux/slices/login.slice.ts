import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Login {
	_id: string;
	username: string;
	email: string;
	avatarUrl?: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
	token: string;
}
interface InitialState {
	data: boolean;
}
const initialState = {
	data: false,
};
const LoginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		addUserData: (state, action: PayloadAction<Login>) => {
			return { ...action.payload, ...state, data: !state.data };
		},
	},
});

export const isLogin = (state: InitialState) => state.data;
export const LoginSliceReducer = LoginSlice.reducer;
export const { addUserData } = LoginSlice.actions;
