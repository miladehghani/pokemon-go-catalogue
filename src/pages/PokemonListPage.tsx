import { useQuery } from "react-query";
import { useInput } from "hooks/input";
import { Input } from "components/@ui/Input";
import { pokemonService } from "services/pokemonService";
import { PokemonList } from "components/PokemonList";
import { QueryKeys } from "types/QueryKeys";
import { Loading } from "components/Loading";
import { GenerationsList } from "components/GenerationsList";
import { useState } from "react";
import { union } from "utils/array";

export const PokemonListPage = () => {
  const searchInput = useInput("");
  const [selectedGenerationId, setSelectedGenerationId] = useState<number>(-1);

  const { isLoading, error, data } = useQuery(
    QueryKeys.pokemonsList,
    pokemonService.fetchAllPokemon,
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: selectedGeneration } = useQuery(
    QueryKeys.generation + selectedGenerationId,
    () => pokemonService.getGenerationById(selectedGenerationId),
    {
      enabled: selectedGenerationId !== -1,
    }
  );

  if (isLoading) return <Loading />;
  if (error) return <p>Error fetching data ... </p>;
  if (!data || !data.results) return null;

  let filteredPokemons = data.results.filter((resource) =>
    resource.name.includes(searchInput.value)
  );

  if (selectedGeneration && selectedGeneration.pokemon_species) {
    filteredPokemons = union(
      selectedGeneration.pokemon_species,
      filteredPokemons,
      "name"
    );
  }

  return (
    <>
      <Input placeholder={"Search by name"} {...searchInput} />
      <GenerationsList onChange={setSelectedGenerationId} />
      <PokemonList pokemonsResource={filteredPokemons} />
    </>
  );
};
