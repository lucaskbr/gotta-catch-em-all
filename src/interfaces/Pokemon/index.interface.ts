import { Stat } from './Stat.interface';
import { Sprites } from './Sprites.interface';
import { Type } from './Type.interface';
import { Ability } from './Ability.interface';

export interface Pokemon {
  id: number;
  name: string;
  order: number;
  weight: number;
  height: number;
  baseExperience: number;
  locationAreaEncounters: string;
  sprites: Sprites;
  stats: Stat[];
  abilities: Ability[];
  types: Type[];
}
