// import {AppDispatch} from "../store.ts";
// import axios from "axios";
// import {postsSlice} from "./postsSlice.ts";
// import {POSTS_API, URL_API} from "../../constans/API.ts";
//
//
//
//
// export const fetchUser = () => async (dispatch: AppDispatch) =>{
//   try {
//     dispatch(postsSlice.actions.postsFetching());
//     const response = await axios.get(`${URL_API}${POSTS_API}`, {
//       headers: {
//         authorization: `Bearer ${localStorage.getItem('token')}`
//       }
//     });
//     console.log(response)
//     dispatch(postsSlice.actions.postsFetchingSuccess(response.data));
//   } catch (error: any) {
//     dispatch(postsSlice.actions.postsFetchingError(error.message));
//   }
// }
