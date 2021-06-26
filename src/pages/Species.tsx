import { useQuery } from "react-query";
import { useInput } from "hooks/input";
import { Input } from "components/@ui/Input";
import { pokemonService } from "services/pokemonService";
import { PokemonList } from "components/PokemonList";
import { QueryKeys } from "types/QueryKeys";
import { Loading } from "components/Loading";
import { useParams } from "react-router-dom";

export const Species = () => {
  const searchInput = useInput("");
  const { speciesId } = useParams<any>();
  const {
    isLoading,
    error,
    data: species,
  } = useQuery(
    QueryKeys.pokemonsList,
    () => pokemonService.getSpeciesById(speciesId),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <Loading />;
  if (error) return <p>Error fetching data ... </p>;
  if (!species || !species.varieties) return null;
  const pokemons = species.varieties.map((varieties) => varieties.pokemon);
  const filteredPokemons = pokemons.filter((resource) =>
    resource.name.includes(searchInput.value)
  );

  return (
    <>
      <Input placeholder={"Search by name"} {...searchInput} />
      <PokemonList pokemonsResource={filteredPokemons} />
    </>
  );
};
