import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
      }),
    }),
    signup: builder.mutation({
      query: (user) => ({
        url: "/auth/signup",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = api;
