import {AppDispatch} from "../store.ts";
import axios from "axios";
import {userSlice} from "./userSlice.ts";
import {IUserFetch} from "../../types/IUser.ts";
import {AUTH_API, URL_API} from "../../constans/API.ts";


export const fetchUser = (data:IUserFetch) => async (dispatch: AppDispatch) =>{
  try {
    dispatch(userSlice.actions.userFetching());
    const response = await axios.post(`${URL_API}${AUTH_API}`, data);
    localStorage.setItem('token', response.data.token);
    localStorage.token =  JSON.stringify(response.data.token)
    localStorage.user = JSON.stringify(response.data)

    dispatch(userSlice.actions.userFetchingSuccess(response.data));
  } catch (error: any) {
    dispatch(userSlice.actions.userFetchingError(error.message));
  }
}
