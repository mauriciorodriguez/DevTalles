import { pokeApi } from "../../config/api/pokeApi";
import { Pokemon } from "../../domain/entities/Pokemon";
import type { PokeApiPaginatedResponse, PokeApiPokemonResponse } from "../../infrastructure/interfaces/pokeapi.responses";
import { PokemonMapper } from "../../infrastructure/mappers/pokemon.mapper";

export const getPokemons = async (page: number, limit: number = 20): Promise<Pokemon[]> => {
  try {
    const { data } = await pokeApi.get<PokeApiPaginatedResponse>("/pokemon", {
      params: {
        offset: page * limit,
        limit
      }
    });

    const pokmeonPromises = data.results.map((info) => {
      return pokeApi.get<PokeApiPokemonResponse>(info.url);
    });

    const pokeApiPokemons = await Promise.all(pokmeonPromises);
    const pokemonsPromises = pokeApiPokemons.map(item => PokemonMapper.pokeApiPokemonToEntity(item.data));
    return await Promise.all(pokemonsPromises);
  } catch (error) {
    console.log(error);
    throw new Error("Error getting pokemons");
  }
}