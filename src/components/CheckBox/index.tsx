import { FC } from "react";
import styled from "styled-components";
import { RowContainer } from "components/@ui/FlexBox";

interface CheckBoxProps {
  label: string;
  _key: string;
  onChange: (value: boolean) => void;
  margin?: string;
  visiblity?: any;
}

export const CheckBox: FC<CheckBoxProps> = (props) => {
  return (
    <RowContainer margin={props.margin} style={{ visibility: props.visiblity }}>
      <Input
        id={`checkbox-${props._key}`}
        type="checkbox"
        onChange={(e) => props.onChange(e.target.checked)}
      />
      <Label htmlFor={`checkbox-${props._key}`}>{props.label}</Label>
    </RowContainer>
  );
};

const Input = styled.input`
  height: 16px;
  width: 16px;
  color: #ababab;
`;

const Label = styled.label`
  color: #ababab;
`;
