import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (author) => author ? `books?author=${author}` : 'books',
      providesTags: ['Books'],
    }),
    getBook: builder.query({
      query: (id) => `books/${id}`,
    }),
    addBook: builder.mutation({
      query: (book) => ({
        url: 'books',
        method: 'POST',
        body: book,
      }),
      invalidatesTags: ['Books'],
    }),
    getBookById: builder.query({
      query: (id) => `books/${id}`,
      providesTags: (result, error, id) => [{ type: 'Books', id }],
    }),
    rentBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}/rent`,
        method: 'POST',
      }),
      invalidatesTags: ['Books'],
    }),
    returnBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}/return`,
        method: 'POST',
      }),
      invalidatesTags: ['Books'],
    }),
  }),
})

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useAddBookMutation,
  useRentBookMutation,
  useReturnBookMutation
} = booksApi
