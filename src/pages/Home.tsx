import { useQuery } from "react-query";
import { useInput } from "hooks/input";
import { Input } from "components/@ui/Input";
import { pokemonService } from "services/pokemonService";
import { PokemonList } from "components/PokemonList";
import { QueryMutationKeys } from "types/QueryMutationKeys";

export const Home = () => {
  const searchInput = useInput("");

  const { isLoading, error, data } = useQuery(
    QueryMutationKeys.pokemonsList,
    () => pokemonService.fetchAllPokemon(),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>Error fetching data ... </p>;
  if (!data) return null;

  const filteredPokemons = data.results.filter((resource) =>
    resource.name.includes(searchInput.value)
  );

  return (
    <>
      <Input placeholder={"Search by name"} {...searchInput} />
      <PokemonList pokemonsResource={filteredPokemons} />
    </>
  );
};
