import styled from "styled-components";
import { FC, ReactElement } from "react";
import { RowContainer } from "components/@ui/FlexBox";

interface SnackbarProps {
  title: string | ReactElement;
  onClose: () => void;
}

export const Snackbar: FC<SnackbarProps> = (props) => {
  return (
    <SnakbarContainer>
      <RowContainer>
        {props.title && <p>{props.title}</p>}
        {props.children}
      </RowContainer>
      <span className="material-icons clickable" onClick={props.onClose}>
        cancel
      </span>
    </SnakbarContainer>
  );
};

const SnakbarContainer = styled(RowContainer)`
  position: absolute;
  bottom: 12px;
  right: 12px;
  height: 42px;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 12px;
  width: 30%;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  color: white;

  p {
    margin: 0 16px 0 0;
  }
`;
