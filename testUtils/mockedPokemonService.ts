import {
  pokemonService as _pokemonService,
  PokemonService,
} from "../src/services/pokemonService";

export const pokemonService = _pokemonService as jest.Mocked<PokemonService>;
