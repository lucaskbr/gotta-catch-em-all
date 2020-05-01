import { Stat } from './Stat.interface';
import { Sprite } from './Sprite.interface';
import { Type } from './Type.interface';
import { Ability } from './Ability.interface';

export interface Pokemon {
  name: string;
  order: number;
  weight: number;
  height: number;
  base_experience: number;
  location_area_encounters: string;
  sprite: Sprite;
  stats: Stat[];
  abilities: Ability[];
  types: Type[];
}
