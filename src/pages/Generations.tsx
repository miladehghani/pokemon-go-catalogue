import { useQuery } from "react-query";
import { pokemonService } from "services/pokemonService";
import { QueryKeys } from "types/QueryKeys";
import { Loading } from "components/Loading";
import { GenerationsList } from "components/Generations";
import { PokemonSpeciesList } from "components/PokemonSpeciesList";
import { useState } from "react";
import { ColumnContainer } from "components/@ui/FlexBox";

export const Generations = () => {
  const [selectedGenerationId, setSelectedGenerationId] = useState<number>();
  const {
    data: generations,
    isLoading,
    error,
  } = useQuery(QueryKeys.generationsList, pokemonService.getGenerations, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <Loading />;
  if (error) return <p>Error</p>;
  if (!generations) return null;

  return (
    <ColumnContainer justify="flex-start">
      <GenerationsList
        generations={generations.results}
        onChange={setSelectedGenerationId}
      />
      {selectedGenerationId && (
        <PokemonSpeciesList generationId={selectedGenerationId} />
      )}
    </ColumnContainer>
  );
};
