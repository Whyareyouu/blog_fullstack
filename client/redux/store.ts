import { configureStore } from '@reduxjs/toolkit';
import { LoginSliceReducer } from './slices/login.slice';
const store = configureStore({
	reducer: {
		LoginSlice: LoginSliceReducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
