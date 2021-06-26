import { BooleanLiteral } from "typescript";
import { Name } from "./generation";
import { Resource } from "./pokemon";

export interface Species {
  id: number;
  order: number;
  capture_rate: number;
  base_happiness: number;
  name: string;
  names: Name[];
  is_mythical: boolean;
  is_legendary: boolean;
  is_baby: boolean;
  hatch_counter: number;
  gender_rate: number;
  has_gender_differences: boolean;
  habitat: Resource;
  generation: Resource;
  growth_rate: Resource;
  shape: Resource;
  color: Resource;
  egg_groups: Resource[];
  varieties: Variety[];
}

export interface Variety {
  is_default: boolean;
  pokemon: Resource;
}
