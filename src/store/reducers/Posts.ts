import {IUser} from "../../models/IUser.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
        userRequest(state ) {
            state.isLoading = true;
        },
        userSuccess(state, action: PayloadAction<IUser>) {
            state.isLoading = false;
            state.error = '';
            state.user = action.payload
        },
        userError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default userData.reducer;