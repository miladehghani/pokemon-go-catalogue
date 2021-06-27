import { Generation } from "types/generation";
import { Pokemon, Resource } from "types/pokemon";
import { PaginatedResponse } from "types/pokemonApi";
import { Species } from "types/Species";

const baseUrl = "https://pokeapi.co/api/v2";

class PokemonService {
  async fetchAllPokemon(): Promise<PaginatedResponse<Resource[]>> {
    return fetch(`${baseUrl}/pokemon?limit=2000`).then((res) => res.json());
  }

  async getPokemonById(id: number): Promise<Pokemon> {
    return fetch(`${baseUrl}/pokemon/${id}`).then((res) => res.json());
  }

  async getGenerations(): Promise<PaginatedResponse<Resource[]>> {
    return fetch(`${baseUrl}/generation`).then((res) => res.json());
  }

  async getGenerationById(id: number): Promise<Generation> {
    return fetch(`${baseUrl}/generation/${id}`).then((res) => res.json());
  }

  async getSpeciesById(id: number): Promise<Species> {
    return fetch(`${baseUrl}/pokemon-species/${id}/`).then((res) => res.json());
  }
}

export const pokemonService = new PokemonService();
