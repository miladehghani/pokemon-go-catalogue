import { useEffect, useState } from "react";
import { Resource } from "types/pokemon";
import { Chips } from "components/@ui/Chips";
import { RowContainer } from "components/@ui/FlexBox";
import { Center } from "components/@ui/Center";
import { extractIdFromUrl } from "utils/string";

interface GenerationsListProps {
  generations: Resource[];
  onChange: (generationId: number) => void;
}

export const GenerationsList = (props: GenerationsListProps) => {
  const [selected, setSelected] = useState<Resource>(props.generations[0]);

  useEffect(() => {
    props.onChange(extractIdFromUrl(selected.url));
  }, [selected]);

  if (props.generations.length === 0)
    return (
      <Center>
        <p>No Result found ...</p>
      </Center>
    );
  else
    return (
      <RowContainer padding="8px 0">
        {props.generations.map((generation) => (
          <Chips
            onClick={() => setSelected(generation)}
            active={generation.url === selected.url}
          >
            {generation.name}
          </Chips>
        ))}
      </RowContainer>
    );
};
