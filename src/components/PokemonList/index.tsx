import { PokemonCard } from "components/PokemonCard";
import { Resource } from "types/pokemon";
import { Grid } from "components/@ui/Grid";
import { Center } from "components/@ui/Center";
import { useInfiniteScroll } from "hooks/infiniteScroll";
import { useState } from "react";

interface PokemonListProps {
  pokemonsResource: Resource[];
}

export const PokemonList = ({ pokemonsResource }: PokemonListProps) => {
  const [count, setCount] = useState(100);
  const onScroll = useInfiniteScroll(
    () => count < pokemonsResource.length && setCount(count + 100)
  );

  if (pokemonsResource.length === 0)
    return (
      <Center>
        <h1>No Result found ...</h1>
      </Center>
    );
  else
    return (
      <Grid onScroll={onScroll}>
        {pokemonsResource.slice(0, count).map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </Grid>
    );
};
