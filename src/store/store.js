import { configureStore } from "@reduxjs/toolkit";
import { counterSlice, pokemonSlice } from "./slices";
import { todosApi } from "./slices/apis";

const storeConfig = {
    reducer: {
        // Define your reducers here
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,

        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todosApi.middleware),
};

export const store = configureStore(storeConfig);
