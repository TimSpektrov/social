import {AppDispatch} from "../store.ts";
import axios from "axios";
import {IUser} from "../../models/IUser.ts";
import {userData} from "../reducers/User.ts";

export interface IFetchUser {
    username: string,
    password: string,
}

export const fetchUser = (user:IFetchUser) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userData.actions.userRequest())

        const sendUser = user.username === 'vniir' ? 'kminchelle' : user.username;
        const sendPass = user.password === '12345' ? '0lelplR' : user.password;

        const response = await
            axios
            .post<IUser>(
                'https://dummyjson.com/auth/login', {
                        username: sendUser,
                        password: sendPass,
                    }

            )
        localStorage.token = response.data.token
        console.log(response)
        dispatch(userData.actions.userSuccess(response.data))
    } catch (error: any) {
            dispatch(userData.actions.userError(error.message))
    }
}