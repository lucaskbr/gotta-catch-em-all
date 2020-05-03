import { Pokemon } from '../../../interfaces/Pokemon/index.interface';
import { StatResponse } from '../../../interfaces/PokemonResponse/StatResponse.interface';
import { Stat } from '../../../interfaces/Pokemon/Stat.interface';
import { SpritesResponse } from '../../../interfaces/PokemonResponse/SpritesResponse.interface';
import { Sprites } from '../../../interfaces/Pokemon/Sprites.interface';
import { TypeResponse } from '../../../interfaces/PokemonResponse/TypeResponse.interface';
import { Type } from '../../../interfaces/Pokemon/Type.interface';
import { AbilityRespose } from '../../../interfaces/PokemonResponse/AbilityResponse.interface';
import { Ability } from '../../../interfaces/Pokemon/Ability.interface';
import { PokemonResponse } from '../../../interfaces/PokemonResponse/index.interface';

function statsMapper(data: StatResponse[]): Stat[] {
  return data.map(
    (statusResponse: StatResponse): Stat => ({
      info: {
        name: statusResponse.stat.name,
        url: statusResponse.stat.url,
      },
      baseStat: statusResponse.base_stat,
      effort: statusResponse.effort,
    }),
  );
}

function spritesMapper(data: SpritesResponse): Sprites {
  return {
    backDefault: data.back_default,
    backFemale: data.back_female,
    backShiny: data.back_shiny,
    backShinyFemale: data.back_shiny_female,
    frontDefault: data.front_default,
    frontFemale: data.front_female,
    frontShiny: data.front_shiny,
    frontShinyFemale: data.front_shiny_female,
  };
}

function typesMapper(data: TypeResponse[]): Type[] {
  return data
    .sort((a, b) => (a.slot > b.slot ? 1 : -1))
    .map(
      (typeResponse: TypeResponse): Type => ({
        info: {
          name: typeResponse.type.name,
          url: typeResponse.type.url,
        },
        slot: typeResponse.slot,
      }),
    );
}

function abilitiesMapper(data: AbilityRespose[]): Ability[] {
  return data.map(
    (abilityResponse: AbilityRespose): Ability => ({
      info: {
        name: abilityResponse.ability.name,
        url: abilityResponse.ability.url,
      },
      slot: abilityResponse.slot,
      isHidden: abilityResponse.is_hidden,
    }),
  );
}

function fromResponseToPokemon(data: PokemonResponse): Pokemon {
  const pokemon: Pokemon = {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    baseExperience: data.base_experience,
    order: data.order,
    sprites: spritesMapper(data.sprites),
    stats: statsMapper(data.stats),
    locationAreaEncounters: data.location_area_encounters,
    types: typesMapper(data.types),
    abilities: abilitiesMapper(data.abilities),
  };
  return pokemon;
}

export default fromResponseToPokemon;
