import { Pokemon, Resource } from "types/pokemon";
import { PaginatedResponse } from "types/pokemonApi";

const baseUrl = "https://pokeapi.co/api/v2";

class PokemonService {
  async fetchAllPokemon(): Promise<PaginatedResponse<Resource[]>> {
    return fetch(`${baseUrl}/pokemon?limit=1100`).then((res) => res.json());
  }

  async getPokemonById(id: number): Promise<Pokemon> {
    return fetch(`${baseUrl}/pokemon/${id}`).then((res) => res.json());
  }
}

export const pokemonService = new PokemonService();
