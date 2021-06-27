import { useEffect, useState } from "react";
import { Resource } from "types/pokemon";
import { Chips } from "components/@ui/Chips";
import { Center } from "components/@ui/Center";
import { extractIdFromUrl } from "utils/string";
import { useQuery } from "react-query";
import { QueryKeys } from "types/QueryKeys";
import { pokemonService } from "services/pokemonService";

interface GenerationsListProps {
  onChange: (generationId: number) => void;
}

export const GenerationsList = ({ onChange }: GenerationsListProps) => {
  const [selected, setSelected] = useState<Resource>();

  const {
    data: generations,
    isLoading,
    error,
  } = useQuery(QueryKeys.generationsList, pokemonService.getGenerations, {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (selected) onChange(extractIdFromUrl(selected.url));
    else onChange(-1);
  }, [selected, onChange]);

  const onClickChips = (generation: Resource) => {
    if (selected && generation.url === selected.url) setSelected(undefined);
    else setSelected(generation);
  };

  if (isLoading) return null;
  if (error) return <p>Error</p>;
  if (!generations || !generations.results) return null;

  if (generations.results.length === 0)
    return (
      <Center>
        <p>No Result found ...</p>
      </Center>
    );
  else
    return (
      <>
        {generations.results.map((generation) => (
          <Chips
            key={generation.url}
            onClick={() => onClickChips(generation)}
            active={selected && generation.url === selected.url}
          >
            {generation.name}
          </Chips>
        ))}
      </>
    );
};
