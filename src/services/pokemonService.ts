import { config } from "config";
import { Generation } from "types/generation";
import { Pokemon, Resource } from "types/pokemon";
import { PaginatedResponse } from "types/pokemonApi";
import { Species } from "types/Species";

class PokemonService {
  baseUrl = config.PokemonApiUrl;

  fetch = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) throw Error(await response.text());
    return response.json();
  };

  fetchAllPokemon = async (): Promise<PaginatedResponse<Resource[]>> =>
    this.fetch(`${this.baseUrl}/pokemon?limit=2000`);

  getPokemonById = async (id: number): Promise<Pokemon> =>
    this.fetch(`${this.baseUrl}/pokemon/${id}`);

  getGenerations = async (): Promise<PaginatedResponse<Resource[]>> =>
    this.fetch(`${this.baseUrl}/generation`);

  getGenerationById = async (id: number): Promise<Generation> =>
    this.fetch(`${this.baseUrl}/generation/${id}`);

  getSpeciesById = (id: number): Promise<Species> =>
    this.fetch(`${this.baseUrl}/pokemon-species/${id}/`);
}

export { PokemonService };
export const pokemonService = new PokemonService();
