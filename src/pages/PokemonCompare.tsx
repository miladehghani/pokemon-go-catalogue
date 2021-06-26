import { PokemonDetails } from "components/PokemonDetails";
import { useParams } from "react-router-dom";
import { RowContainer } from "components/@ui/FlexBox";

export const PokemonCompare = () => {
  const { pokemonIds } = useParams<any>();

  return (
    <RowContainer
      overflow="auto"
      height="100%"
      align="flex-start"
      justify="flex-start"
    >
      {pokemonIds.split(",").map((pokemonId: number) => (
        <PokemonDetails key={pokemonId} pokemonId={pokemonId} />
      ))}
    </RowContainer>
  );
};
