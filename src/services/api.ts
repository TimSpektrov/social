import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com'
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: '/auth/login',
        method: 'POST',
        body: user,
      })
    }),
    // Другие endpoints, которые вам могут потребоваться
  }),
})

// Экспортируются хуки для использования в компонентах
export const { useLoginMutation } = api
