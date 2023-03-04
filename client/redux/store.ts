import { configureStore } from '@reduxjs/toolkit';
import { LoginSliceReducer } from './slices/login.slice';
import { TokenReducer } from './slices/token.slice';
const store = configureStore({
	reducer: {
		LoginSlice: LoginSliceReducer,
		tokenSlice: TokenReducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
