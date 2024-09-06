import { pokeApi } from "../../config/api/pokeApi";
import { PokeApiPaginatedResponse } from "../../infrastructure/interfaces/pokeapi.responses";

export const getPokemonNamesWithId = async () => {
  const url = `pokemon?limit=${2000}`
  const { data } = await pokeApi.get<PokeApiPaginatedResponse>(url);
  return data.results.map(info => ({
    id: Number(info.url.split("/")[6]),
    name: info.name
  }))
}