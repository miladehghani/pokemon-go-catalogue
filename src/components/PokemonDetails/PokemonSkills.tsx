import { Pokemon } from "types/pokemon";
import { ColumnContainer } from "components/@ui/FlexBox";
import { ChipsList } from "components/ChipsList";

interface PokemonSkillsProps {
  pokemon: Pokemon;
}

export const PokemonSkills = ({ pokemon }: PokemonSkillsProps) => (
  <ColumnContainer align="flex-start" margin="0 2%">
    <ChipsList
      title={"Abilities"}
      nodeKey={"ability"}
      list={pokemon.abilities}
    />
    <ChipsList title={"Moves"} nodeKey={"move"} list={pokemon.moves} />
    <ChipsList title={"Stats"} nodeKey={"stat"} list={pokemon.stats} />
  </ColumnContainer>
);
