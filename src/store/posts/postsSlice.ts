//
// import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// import {IPost} from "../../types/IPost.ts";
//
//
// interface PostsState {
//   posts: IPost[];
//   isLoading: boolean;
//   error: string;
// }
//
// const initialState: PostsState = {
//   posts: [],
//   isLoading: false,
//   error: '',
// }
//
// export const postsSlice = createSlice({
//   name: 'posts',
//   initialState,
//   reducers: {
//     postsFetching(state) {
//       state.isLoading = true;
//     },
//     postsFetchingSuccess(state, action: PayloadAction<IPost[]>) {
//       state.isLoading = false;
//       state.posts = action.payload;
//     },
//     postsFetchingError(state, action: PayloadAction<string>) {
//       state.isLoading = false;
//       state.error = action.payload;
//     }
//   },
// })
//
// export default postsSlice.reducer;
