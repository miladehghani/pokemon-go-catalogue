import { useQuery } from "react-query";
import styled from "styled-components";
import { useInput } from "hooks/input";
import { Grid } from "components/@ui/Grid";
import { Loading } from "components/Loading";
import { Center } from "components/@ui/Center";
import { Input } from "components/@ui/Input";
import { QueryKeys } from "types/QueryKeys";
import { pokemonService } from "services/pokemonService";

interface PokemonSpeciesListProps {
  generationId: number;
}

export const PokemonSpeciesList = ({
  generationId,
}: PokemonSpeciesListProps) => {
  const {
    data: generation,
    error,
    isLoading,
  } = useQuery(
    QueryKeys.generation + generationId,
    () => pokemonService.getGenerationById(generationId),
    { refetchOnWindowFocus: false }
  );
  const searchInput = useInput("");

  if (error) return <p>Error</p>;
  if (isLoading) return <Loading />;

  if (!generation) return null;
  const { pokemon_species: species } = generation;

  if (species.length === 0)
    return (
      <Center>
        <p>No Result found ...</p>
      </Center>
    );
  else
    return (
      <>
        <Input {...searchInput} placeholder="Search by name" />
        <Grid height="calc(100vh - 157px)">
          {species
            .filter((specie) => specie.name.includes(searchInput.value))
            .map((specie) => (
              <SpeciesContainer>{specie.name}</SpeciesContainer>
            ))}
        </Grid>
      </>
    );
};

const SpeciesContainer = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 4px 2px #a7a7a7;
  border-radius: 50%;
  :hover {
    background: #ebebeb;
    cursor: pointer;
  }
`;
