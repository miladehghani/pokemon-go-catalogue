import { Move, Resource, Type } from "./pokemon";

export interface Generation {
  id: number;
  name: string;
  names: Name[];
  abilities: Resource[];
  main_region: Resource;
  moves: Move[];
  pokemon_species: Resource[];
  types: Type[];
  version_groups: Resource[];
}

export interface Name {
  language: Resource;
  name: string;
}
