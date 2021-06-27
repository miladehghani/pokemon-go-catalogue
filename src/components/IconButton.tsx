import styled from "styled-components";

interface IconButtonProps {
  checkedIcon: string;
  unCheckedIcon: string;
  checked?: boolean;
  onChange?: () => void;
  color?: string;
  dataTestId?: string;
}

export const IconButton = (props: IconButtonProps) => {
  return (
    <Span
      data-testid={props.dataTestId}
      className="material-icons"
      onClick={() => props.onChange && props.onChange()}
      color={props.color}
    >
      {props.checked ? props.checkedIcon : props.unCheckedIcon}
    </Span>
  );
};

const Span = styled.span<{ color?: string }>`
  ${(props) => props.color && `color: ${props.color};`};
  cursor: pointer;
`;
