import { StatResponse } from './StatResponse.interface';
import { SpritesResponse } from './SpritesResponse.interface';
import { TypeResponse } from './TypeResponse.interface';
import { AbilityRespose } from './AbilityResponse.interface';

export interface PokemonResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  order: number;
  location_area_encounters: string;
  sprites: SpritesResponse;
  stats: StatResponse[];
  types: TypeResponse[];
  abilities: AbilityRespose[];
}
