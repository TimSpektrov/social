import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/'
    }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 10) => ({
                url: '/posts',
                headers: {'Authorization': `Bearer ${localStorage.token}`},

            })
        })
    })
});

