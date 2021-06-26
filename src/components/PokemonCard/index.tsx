import { useHistory } from "react-router-dom";
import { Resource } from "types/pokemon";
import { extractIdFromUrl } from "utils/string";
import { Card } from "components/@ui/Card";
import { Thumbnail } from "components/@ui/Thumbnail";
import { Title } from "components/@ui/Typography";
import { CheckBox } from "components/CheckBox";
import { useCallback, useState } from "react";

interface PokemonCardProps {
  pokemon: Resource;
  selected: boolean;
  onSelectChange: (value: boolean) => void;
}

export const PokemonCard = (props: PokemonCardProps) => {
  const { pokemon } = props;
  const pokemonId = extractIdFromUrl(pokemon.url);
  const [hovered, setHovered] = useState(false);
  const history = useHistory();

  const onCardClick = useCallback(() => {
    history.push(`pokemon/${pokemonId}`);
  }, [pokemonId]);

  return (
    <Card
      borderRadius="50%"
      selected={props.selected}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Title>{pokemon.name}</Title>

      <CheckBox
        label="select to compare"
        _key={props.pokemon.name}
        margin="4px 0 0 0"
        checked={props.selected}
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
