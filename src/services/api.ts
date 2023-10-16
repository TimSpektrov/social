import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {POSTS_API, URL_API} from "../constans/API.ts";

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: URL_API
  }),
  endpoints: (build) => ({
    // login: build.mutation({
    //   query: (user) => ({
    //     url: AUTH_API,
    //     method: 'POST',
    //     body: user,
    //   })
    // }),
    fetchAllPosts: build.query({
      query: () => ({
        url: POSTS_API,
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
    })
    // Другие endpoints, которые вам могут потребоваться
  }),
})

// Экспортируются хуки для использования в компонентах

