import axios from "axios";
import { POKEMON_API_URL } from "./";

export const pokemonApi = axios.create({
    baseURL: POKEMON_API_URL,
});
