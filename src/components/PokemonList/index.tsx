import { PokemonCard } from "components/PokemonCard";
import { Resource } from "types/pokemon";
import { Grid } from "components/@ui/Grid";
import { Center } from "components/@ui/Center";

interface PokemonListProps {
  pokemonsResource: Resource[];
}

export const PokemonList = (props: PokemonListProps) => {
  const { pokemonsResource } = props;
  if (pokemonsResource.length === 0)
    return (
      <Center>
        <h1>No Result found ...</h1>
      </Center>
    );
  else
    return (
      <Grid>
        {pokemonsResource.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </Grid>
    );
};
