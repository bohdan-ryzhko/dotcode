import { UserType } from './../../inderfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UsersState = {
  data: UserType[];
};

const initialState: UsersState = {
  data: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<UserType>) {
      state.data.push(action.payload);
    },
    updateUser(state, action: PayloadAction<UserType>) {
      const updatedIndex = state.data.findIndex(
        user => user.id === action.payload.id,
      );

      if (updatedIndex >= 0) {
        state.data.splice(updatedIndex, 1, action.payload);
      }
    },
    deleteUser(state, action: PayloadAction<string>) {
      const deletedIndex = state.data.findIndex(
        user => user.id === action.payload,
      );

      if (deletedIndex >= 0) {
        state.data.splice(deletedIndex, 1);
      }
    },
    clearUsers(state) {
      state.data = [];
    },
  },
});

export const { addUser, updateUser, deleteUser, clearUsers } =
  usersSlice.actions;
export const usersReducer = usersSlice.reducer;
