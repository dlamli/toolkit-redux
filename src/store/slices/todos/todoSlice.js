import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: 10,
    },
    reducers: {
        increment: (state /* action */) => {
            state.todos += 1;
        },
    },
});

export const { increment } = todoSlice.actions;
