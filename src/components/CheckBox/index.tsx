import { FC } from "react";
import styled from "styled-components";
import { RowContainer } from "components/@ui/FlexBox";

interface CheckBoxProps {
  label?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  margin?: string;
}

export const CheckBox: FC<CheckBoxProps> = (props) => {
  return (
    <Container
      margin={props.margin}
      onClick={() => props.onChange(!props.checked)}
    >
      {
        <span className="material-icons">
          {props.checked ? "check_box" : "check_box_outline_blank"}
        </span>
      }
      {props.label && <Label>{props.label}</Label>}
    </Container>
  );
};

const Container = styled(RowContainer)`
  cursor: pointer;
  color: ${(props) => props.theme.colors.secondary};
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.grey[7]};
`;
