import { Resource } from "types/pokemon";
import { extractIdFromUrl } from "utils/string";
import { Card } from "components/@ui/Card";
import { Thumbnail } from "components/@ui/Thumbnail";
import { Title } from "components/@ui/Typography";

interface PokemonCardProps {
  pokemon: Resource;
}

export const PokemonCard = (props: PokemonCardProps) => {
  const { pokemon } = props;
  return (
    <Card borderRadius="50%">
      <Title>{pokemon.name}</Title>
      <Thumbnail
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractIdFromUrl(
          pokemon.url
        )}.png`}
      />
    </Card>
  );
};
