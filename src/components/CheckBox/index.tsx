import { FC } from "react";
import styled from "styled-components";
import { RowContainer } from "components/@ui/FlexBox";
import { IconButton } from "components/IconButton";
import { defaultTheme } from "theme";

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
      <IconButton
        checked={props.checked}
        checkedIcon="check_box"
        unCheckedIcon="check_box_outline_blank"
      />
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
