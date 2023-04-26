import { Types } from './types';

export interface Pokemon
{
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Types[]


  //image.sprites.other.official-artwork.front_default : string;
}
