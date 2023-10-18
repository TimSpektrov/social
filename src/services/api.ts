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
    }),
    fetchPostId: build.query({
      query: (id) => ({
        url: `${POSTS_API}/${id}`,
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
    }),
    fetchPostComments: build.query({
      query: (id) => ({
        url: `${POSTS_API}/${id}/comments`,
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
    }),
    // fetchAddComment: build.mutation({
    //   query: (body) => ({
    //     url: `${POSTS_API}/comments/add`,
    //     method: 'POST',
    //     headers: {
    //       authorization: `Bearer ${localStorage.getItem('token')}`
    //     },
    //     body,
    //   })
    // }),
    // Другие endpoints, которые вам могут потребоваться
  }),
})

// Экспортируются хуки для использования в компонентах
export const {
  useFetchAllPostsQuery,
  useFetchPostIdQuery,
  useFetchPostCommentsQuery,
  // useFetchAddCommentMutation
} = api
