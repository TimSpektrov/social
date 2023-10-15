// import {createAsyncThunk} from "@reduxjs/toolkit";
// import axios from "axios";
//
// export const fetchUser = createAsyncThunk(
//     'user/fetchAll',
//     async (_, thunkAPI) => {
//         try {
//             // const sendUser = user.username === 'vniir' ? 'kminchelle' : user.username;
//             // const sendPass = user.password === '12345' ? '0lelplR' : user.password;
//
//             const response = await axios
//                     .post(
//                         'https://dummyjson.com/auth/login', {
//                             username: 'kminchelle',
//                             password: '0lelplR',
//                         }
//                     )
//             localStorage.token = response.data.token
//             console.log(response)
//                 return response.data
//         } catch (error) {
//             return thunkAPI.rejectWithValue('Не удалось авторизоваться')
//         }
//     }
// )