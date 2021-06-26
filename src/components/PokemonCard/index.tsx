import { useHistory } from "react-router-dom";
import { Resource } from "types/pokemon";
import { extractIdFromUrl } from "utils/string";
import { Card } from "components/@ui/Card";
import { Thumbnail } from "components/@ui/Thumbnail";
import { Title } from "components/@ui/Typography";
import { useCallback } from "react";

interface PokemonCardProps {
  pokemon: Resource;
}

export const PokemonCard = (props: PokemonCardProps) => {
  const { pokemon } = props;
  const pokemonId = extractIdFromUrl(pokemon.url);
  const history = useHistory();

  const onCardClick = useCallback(() => {
    history.push(`pokemon/${pokemonId}`);
  }, [pokemonId]);

  return (
    <Card borderRadius="50%" onClick={onCardClick}>
      <Title>{pokemon.name}</Title>
      <Thumbnail
        loading="lazy"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
      />
    </Card>
  );
};
