import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userRequest = createApi({
    reducerPath: 'userRequest',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com'}
    ),
    endpoints: (build) => ({
        userLogin: build.mutation({
            query: ({username, password}) => ({
                url: '/auth/login',
                body: {username, password}
            })
        })
    })
});

export const {useUserLoginMutation} = userRequest;