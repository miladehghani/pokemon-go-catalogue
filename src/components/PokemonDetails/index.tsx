import { useQuery } from "react-query";
import { pokemonService } from "services/pokemonService";
import { QueryKeys } from "types/QueryKeys";
import { RowContainer } from "components/@ui/FlexBox";
import { PokemonSkills } from "components/PokemonDetails/PokemonSkills";
import { PokemonSpecification } from "./PokemonSpecification";
import { Loading } from "components/Loading";

interface PokemonDetailsProps {
  pokemonId: number;
  width?: string;
}

export const PokemonDetails = (props: PokemonDetailsProps) => {
  const {
    data: pokemon,
    isLoading,
    error,
  } = useQuery(
    QueryKeys.pokemon + props.pokemonId,
    () => pokemonService.getPokemonById(props.pokemonId),
    { refetchOnWindowFocus: false }
  );

  if (error) return <p>"Error"</p>;
  if (isLoading) return <Loading />;
  if (!pokemon) return null;

  return (
    <RowContainer
      align="flex-start"
      wrap="wrap"
      width={props.width}
      minWidth={"max(50%, 580px)"}
      margin="0 16px"
    >
      <PokemonSpecification pokemon={pokemon} />
      <PokemonSkills pokemon={pokemon} />
    </RowContainer>
  );
};
