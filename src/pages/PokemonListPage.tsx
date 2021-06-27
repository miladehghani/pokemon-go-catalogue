import { useQuery } from "react-query";
import { useInput } from "hooks/useInput";
import { SearchInput } from "components/SearchInput";
import { Chips } from "components/@ui/Chips";
import { RowContainer } from "components/@ui/FlexBox";
import { pokemonService } from "services/pokemonService";
import { PokemonList } from "components/PokemonList";
import { QueryKeys } from "types/QueryKeys";
import { Loading } from "components/Loading";
import { GenerationsList } from "components/GenerationsList";
import { useState } from "react";
import { union } from "utils/array";
import { useAppSelector } from "hooks/storeHooks";
import { defaultTheme } from "theme";

export const PokemonListPage = () => {
  const searchInput = useInput("");
  const favorites = useAppSelector((state) => state.favorites);

  const [selectedGenerationId, setSelectedGenerationId] = useState<number>(-1);
  const [favFilter, setFavFilter] = useState(false);
  const {
    isLoading,
    error,
    data: pokemons,
  } = useQuery(QueryKeys.pokemonsList, pokemonService.fetchAllPokemon, {
    refetchOnWindowFocus: false,
  });
  const { data: selectedGeneration } = useQuery(
    QueryKeys.generation + selectedGenerationId,
    () => pokemonService.getGenerationById(selectedGenerationId),
    {
      enabled: selectedGenerationId !== -1,
    }
  );

  if (isLoading) return <Loading />;
  if (error) return <p>Error fetching data ... </p>;
  if (!pokemons || !pokemons.results) return null;

  let filteredPokemons = pokemons.results.filter((resource) =>
    resource.name.includes(searchInput.value)
  );

  if (selectedGeneration && selectedGeneration.pokemon_species) {
    filteredPokemons = union(
      filteredPokemons,
      selectedGeneration.pokemon_species,
      "name"
    );
  }

  if (favFilter) {
    const favoritesArray = Object.entries(favorites)
      .filter(([_, value]) => value)
      .map(([key, _]) => key);
    filteredPokemons = filteredPokemons.filter((pokemon) =>
      favoritesArray.includes(pokemon.url)
    );
  }

  return (
    <>
      <SearchInput placeholder={"Search by name"} {...searchInput} />
      <RowContainer wrap="wrap" margin="6px 0 16px 0">
        <GenerationsList onChange={setSelectedGenerationId} />
        <Chips
          active={favFilter}
          background={defaultTheme.colors.grey[4]}
          color="red"
          onClick={() => setFavFilter(!favFilter)}
        >
          Favorites
        </Chips>
      </RowContainer>
      <PokemonList pokemonsResource={filteredPokemons} />
    </>
  );
};
