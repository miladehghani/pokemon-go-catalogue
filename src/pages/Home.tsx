import { useQuery } from "react-query";
import { pokemonService } from "services/pokemonService";
import { PokemonList } from "components/PokemonList";
import { QueryMutationKeys } from "types/QueryMutationKeys";

export const Home = () => {
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

  return <PokemonList pokemonsResource={data.results} />;
};
