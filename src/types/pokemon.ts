export interface Pokemon {
  id: number;
  name: string;
  order: number;
  height: number;
  weight: number;
  species: Resource;
  abilities: Ability[];
  moves: Move[];
  is_default: boolean;
  base_experience: number;
  forms: Resource[];
  game_indices: GameIndices[];
  sprites: any;
  stats: Stat[];
  types: Type[];
  held_items: HeldItems[];
}

export interface Ability {
  ability: Resource;
  is_hidden: boolean;
  slot: number;
}

export interface Move {
  move: Resource;
  version_group_details: versionGroupDetails[];
}

export interface versionGroupDetails {
  level_learned_at: number;
  move_learn_method: Resource;
  version_group: Resource;
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
