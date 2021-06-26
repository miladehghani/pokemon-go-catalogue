import { ColumnContainer, RowContainer } from "components/@ui/FlexBox";
import { Chips } from "components/@ui/Chips";
import styled from "styled-components";

interface ChipsListProps {
  title: string;
  nodeKey: string;
  list: any[];
}

export const ChipsList = ({ title, nodeKey, list }: ChipsListProps) => {
  return (
    <ColumnContainer width="100%" margin="0 0 1% 0" align="flex-start">
      <Label>{title}</Label>
      <RowContainer justify="flex-start" wrap="wrap" width="100%">
        {list.map((node: any) => (
          <Chips key={node[nodeKey].url}> {node[nodeKey].name}</Chips>
        ))}
      </RowContainer>
    </ColumnContainer>
  );
};

const Label = styled.label`
  margin-bottom: 0.5%;
  font-size: 20px;
  font-weight: 600;
  color: #3c3c3c;
`;
