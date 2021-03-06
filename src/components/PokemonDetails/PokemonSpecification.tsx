import { RowContainer } from "components/@ui/FlexBox";
import { Table, TableContainer } from "components/@ui/Table";
import { Pokemon } from "types/pokemon";
import { ImageContainer } from "components/@ui/ImageContainer";

interface PokemonSpecificationProps {
  pokemon: Pokemon;
}

export const PokemonSpecification = ({
  pokemon,
}: PokemonSpecificationProps) => (
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
