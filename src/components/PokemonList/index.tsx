import { Link } from "react-router-dom";
import { PokemonCard } from "components/PokemonCard";
import { Resource } from "types/pokemon";
import { Grid } from "components/@ui/Grid";
import { Snackbar } from "components/Snackbar";
import { Center } from "components/@ui/Center";
import { useInfiniteScroll } from "hooks/infiniteScroll";
import { useCallback, useState } from "react";
import { Button } from "components/@ui/Button";
import { extractIdFromUrl } from "utils/string";

interface PokemonListProps {
  pokemonsResource: Resource[];
}

export const PokemonList = ({ pokemonsResource }: PokemonListProps) => {
  const [count, setCount] = useState(20);
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const onScroll = useInfiniteScroll(
    () => count < pokemonsResource.length && setCount(count + 20)
  );

  const selectHandler = (pokemon: Resource) => {
    if (selectedItems[pokemon.url]) {
      selectedItems[pokemon.url] = false;
    } else {
      selectedItems[pokemon.url] = true;
    }
    setSelectedItems({ ...selectedItems });
  };
  const clearSelections = useCallback(() => {
    setSelectedItems({});
  }, []);

  const getSelectedItemsIds = () =>
    Object.entries(selectedItems)
      .filter(([key, value]) => value)
      .map(([key, value]) => extractIdFromUrl(key));

  const numberOfSelectedItems = Object.values(selectedItems).filter(
    (item) => item
  ).length;

  if (pokemonsResource.length === 0)
    return (
      <Center>
        <p>No Result found ...</p>
      </Center>
    );
  else
    return (
      <Grid onScroll={onScroll} height="calc(100vh - 164px)">
        {pokemonsResource.slice(0, count).map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemon={pokemon}
            selected={selectedItems[pokemon.url]}
            onSelectChange={() => selectHandler(pokemon)}
          />
        ))}
        {numberOfSelectedItems > 0 && (
          <Snackbar
            title={
              <>
                <span>{numberOfSelectedItems}</span> pokemon selected!
              </>
            }
            onClose={clearSelections}
          >
            {numberOfSelectedItems > 1 && (
              <Link to={`/compare/${getSelectedItemsIds().join(",")}`}>
                <Button>Compare</Button>
              </Link>
            )}
          </Snackbar>
        )}
      </Grid>
    );
};
