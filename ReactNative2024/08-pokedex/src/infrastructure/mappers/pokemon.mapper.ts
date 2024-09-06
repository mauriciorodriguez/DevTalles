import { getColorFromImage } from '../../config/helpers/get-color';
import type { Pokemon } from '../../domain/entities/pokemon';
import { PokeApiPokemonResponse } from '../interfaces/pokeapi.responses';

export class PokemonMapper {
  static async pokeApiPokemonToEntity(data: PokeApiPokemonResponse): Promise<Pokemon> {
    const sprites = PokemonMapper.getSprites(data);
    const avatar = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;

    return {
      id: data.id,
      name: data.name,
      avatar,
      types: data.types.map(t => t.type.name),
      sprites,
      color: await getColorFromImage(avatar),
      abilities: data.abilities.map(a => a.ability.name),
      stats: data.stats.map(s => { return { name: s.stat.name, value: s.base_stat } }),
      games: data.game_indices.map(g => g.version.name).sort(),
      moves: data.moves.map(m => { return { name: m.move.name, level: m.version_group_details[0].level_learned_at } }).sort((a, b) => {
        if (a.level > b.level) return 1;
        if (a.level < b.level) return -1;
        return 0;
      }),
    };
  }

  static getSprites(data: PokeApiPokemonResponse): string[] {
    const sprites: string[] = [
      data.sprites.front_default,
      data.sprites.back_default,
      data.sprites.front_shiny,
      data.sprites.back_shiny,
    ];

    if (data.sprites.other?.home.front_default)
      sprites.push(data.sprites.other?.home.front_default);
    if (data.sprites.other?.['official-artwork'].front_default)
      sprites.push(data.sprites.other?.['official-artwork'].front_default);
    if (data.sprites.other?.['official-artwork'].front_shiny)
      sprites.push(data.sprites.other?.['official-artwork'].front_shiny);
    if (data.sprites.other?.showdown.front_default)
      sprites.push(data.sprites.other?.showdown.front_default);
    if (data.sprites.other?.showdown.back_default)
      sprites.push(data.sprites.other?.showdown.back_default);

    return sprites;
  }
}