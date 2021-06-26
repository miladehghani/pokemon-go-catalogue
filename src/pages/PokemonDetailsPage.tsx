import { PokemonDetails } from "components/PokemonDetails";
import { useParams } from "react-router-dom";
import { Wrapper } from "components/@ui/FlexBox";

export const PokemonDetailsPage = () => {
  const { pokemonId } = useParams<any>();
  return (
    <Wrapper height="100%" overflow="auto">
      <PokemonDetails pokemonId={pokemonId} />
    </Wrapper>
  );
};
