import { Move, Resource, Type } from "./pokemon";

export interface Generation {
  id: number;
  name: string;
  names: {
    language: Resource;
    name: string;
  };
  abilities: Resource[];
  main_region: Resource;
  moves: Move[];
  pokemon_species: Resource[];
  types: Type[];
  version_groups: Resource[];
}
