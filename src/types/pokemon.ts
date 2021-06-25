export interface Pokemon {
  id: number;
  name: string;
  order: number;
  height: number;
  weight: number;
  species: Resource;
  is_default: boolean;
  base_experience: number;
  forms: Resource[];
  game_indices: GameIndices[];
  sprites: any;
  stats: Stat[];
  types: Type[];
  held_items: HeldItems[];
}

export interface Resource {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Resource;
}

export interface Type {
  slot: number;
  type: Resource;
}

export interface HeldItems {
  item: Resource;
  version_details: {
    rarity: number;
    version: Resource;
  }[];
}

export interface GameIndices {
  game_index: number;
  version: Resource;
}
