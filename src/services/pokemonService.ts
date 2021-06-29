import { Generation } from "types/generation";
import { Pokemon, Resource } from "types/pokemon";
import { PaginatedResponse } from "types/pokemonApi";
import { Species } from "types/Species";

const baseUrl = "https://pokeapi.co/api/v2";

class PokemonService {
  fetch = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) throw Error(await response.text());
    return response.json();
  };

  fetchAllPokemon = async (): Promise<PaginatedResponse<Resource[]>> =>
    this.fetch(`${baseUrl}/pokemon?limit=2000`);

  getPokemonById = async (id: number): Promise<Pokemon> =>
    this.fetch(`${baseUrl}/pokemon/${id}`);

  getGenerations = async (): Promise<PaginatedResponse<Resource[]>> =>
    this.fetch(`${baseUrl}/generation`);

  getGenerationById = async (id: number): Promise<Generation> =>
    this.fetch(`${baseUrl}/generation/${id}`);

  getSpeciesById = (id: number): Promise<Species> =>
    this.fetch(`${baseUrl}/pokemon-species/${id}/`);
}

export { PokemonService };
export const pokemonService = new PokemonService();
