import { useHistory } from "react-router-dom";
import { Resource } from "types/pokemon";
import { extractIdFromUrl } from "utils/string";
import { Card } from "components/@ui/Card";
import { Thumbnail } from "components/@ui/Thumbnail";
import { Title } from "components/@ui/Typography";
import { CheckBox } from "components/CheckBox";
import { useCallback, useState } from "react";
import { IconButton } from "components/IconButton";
import { RowContainer } from "components/@ui/FlexBox";

interface PokemonCardProps {
  pokemon: Resource;
  selected: boolean;
  favorite: boolean;
  onFavoriteChanged: () => void;
  onSelectChange: (value: boolean) => void;
}

export const PokemonCard = (props: PokemonCardProps) => {
  const { pokemon } = props;

  const pokemonId = extractIdFromUrl(pokemon.url);
  const history = useHistory();

  const onCardClick = useCallback(() => {
    history.push(`pokemon/${pokemonId}`);
  }, [pokemonId, history]);

  return (
    <Card
      data-testid={`card-${pokemon.name}`}
      position="relative"
      borderRadius="16px"
      selected={props.selected}
    >
      <RowContainer
        align="center"
        justify="space-between"
        width="84%"
        margin="8% 0 0 0"
      >
        <IconButton
          checked={props.favorite}
          onChange={props.onFavoriteChanged}
          checkedIcon={"favorite"}
          unCheckedIcon={"favorite_border"}
          color={"red"}
        />
        <CheckBox
          dataTestId={`checkbox-${pokemon.name}`}
          checked={props.selected}
          onChange={props.onSelectChange}
        />
      </RowContainer>
      <Title>{pokemon.name}</Title>
      <Thumbnail
        onClick={onCardClick}
        loading="lazy"
        style={{ marginTop: "-16px" }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
      />
    </Card>
  );
};
