import { RowContainer } from "components/@ui/FlexBox";
import { Table, TableContainer } from "components/@ui/Table";
import { Pokemon } from "types/pokemon";
import styled from "styled-components";

interface PokemonSpecificationProps {
  pokemon: Pokemon;
}

export const PokemonSpecification = ({
  pokemon,
}: PokemonSpecificationProps) => {
  return (
    <RowContainer align="center" width="100%" overflow="auto">
      <ImageContainer>
        <img
          alt={pokemon.name}
          width="auto"
          height="75%"
          loading="lazy"
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
        />
      </ImageContainer>
      <TableContainer>
        <Table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{pokemon.name}</td>
            </tr>

            <tr>
              <th>Species</th>
              <td>{pokemon.species.name}</td>
            </tr>
            <tr>
              <th>Height</th>
              <td>{pokemon.height}</td>
            </tr>
            <tr>
              <th>Weight</th>
              <td>{pokemon.weight}</td>
            </tr>
            <tr>
              <th>Base experience</th>
              <td>{pokemon.base_experience}</td>
            </tr>
          </tbody>
        </Table>
      </TableContainer>
    </RowContainer>
  );
};

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: white;
  box-shadow: 2px 2px 4px 2px #a7a7a7;
  border-radius: 50%;
  margin: 8px 0;
  z-index: 10;

  @media (max-width: 580px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 580px) {
    width: 250px;
    height: 250px;
  }
`;
