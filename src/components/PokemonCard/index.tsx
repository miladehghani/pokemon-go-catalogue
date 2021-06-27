import { useHistory } from "react-router-dom";
import { Resource } from "types/pokemon";
import { extractIdFromUrl } from "utils/string";
import { Card } from "components/@ui/Card";
import { Thumbnail } from "components/@ui/Thumbnail";
import { Title } from "components/@ui/Typography";
import { CheckBox } from "components/CheckBox";
import { useCallback, useState } from "react";
import { FavoriteButton } from "components/FavoriteButton";

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
  const [hovered, setHovered] = useState(false);
  const history = useHistory();

  const onCardClick = useCallback(() => {
    history.push(`pokemon/${pokemonId}`);
  }, [pokemonId, history]);

  return (
    <Card
      position="relative"
      borderRadius="16px"
      selected={props.selected}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <FavoriteButton
        onChange={props.onFavoriteChanged}
        checked={props.favorite}
      />
      <Title>{pokemon.name}</Title>
      <CheckBox
        label="select to compare"
        _key={props.pokemon.name}
        margin="0 0 16px 0"
        onChange={props.onSelectChange}
        visiblity={hovered || props.selected ? "visible" : "hidden"}
      />
      <Thumbnail
        onClick={onCardClick}
        loading="lazy"
        style={{ marginTop: "-16px" }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
      />
    </Card>
  );
};
