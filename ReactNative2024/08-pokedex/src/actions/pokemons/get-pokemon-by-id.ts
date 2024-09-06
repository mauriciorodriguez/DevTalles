import { pokeApi } from "../../config/api/pokeApi";
import { Pokemon } from "../../domain/entities/Pokemon";
import { PokeApiPokemonResponse } from "../../infrastructure/interfaces/pokeapi.responses";
import { PokemonMapper } from "../../infrastructure/mappers/pokemon.mapper";

export const getPokemonById = async (id: number): Promise<Pokemon> => {
  try {
    const { data } = await pokeApi.get<PokeApiPokemonResponse>(`/pokemon/${id}`);
    return PokemonMapper.pokeApiPokemonToEntity(data)
  } catch (error) {
    console.log(error);
    throw new Error(`Error getting pokemon bt id: ${id}`);
  }
}