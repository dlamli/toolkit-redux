import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { JSON_API_URL } from "../../../services/api";

export const todosApi = createApi({
    reducerPath: "todos",
    baseQuery: fetchBaseQuery({
        baseUrl: JSON_API_URL,
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "/todos",
        }),
        getTodoById: builder.query({
            query: (todoId) => `/todos/${todoId}`,
        }),
    }),
});

export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;
