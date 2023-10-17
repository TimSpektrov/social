import {IUser} from "../../types/IUser.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
  user: IUser | null;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  user: localStorage.user ? JSON.parse(localStorage.user) : null,
  isLoading: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userFetching(state) {
      state.isLoading = true;
    },
    userFetchingSuccess(state, action: PayloadAction<IUser>) {
      state.isLoading = false;
      state.user = action.payload;
    },
    userFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    userLogout(state) {
        state.user = null
    }
  },
})

export default userSlice.reducer;
