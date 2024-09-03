import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './users';

export const reducer = combineReducers({
  users: usersReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
