import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IFetchComment {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
}

interface AddCommentState {
  comment: IFetchComment[];
  isLoading: boolean;
  error: string;
}

const initialState: AddCommentState = {
  comment: [],
  isLoading: false,
  error: '',
}

export const addCommentSlice = createSlice({
  name: 'addComment',
  initialState,
  reducers: {
    addCommentFetching(state) {
      state.isLoading = true;
    },
    addCommentFetchingSuccess(state, action: PayloadAction<IFetchComment>) {
      console.log(action.payload)
      state.isLoading = false;
      state.comment = [...state.comment, action.payload];
      state.error = '';
    },
    addCommentFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
})

export default addCommentSlice.reducer;
