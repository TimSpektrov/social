import {IUser} from "../../models/IUser.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUser} from "./ActionCreators.ts";

interface IUserState {
    user: IUser | null;
    isLoading: boolean;
    error: string;
}

const initialState: IUserState = {
    user: null,
    isLoading: false,
    error: '',
}

export const userData = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isLoading = false;
            state.error = '';
            state.user = action.payload
        },
        [fetchUser.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },

    }
})

export default userData.reducer;