import styled from "styled-components";
import { FC, ReactElement } from "react";
import { RowContainer } from "components/@ui/FlexBox";

interface SnackbarProps {
  title: string | ReactElement;
  onClose: () => void;
}

export const Snackbar: FC<SnackbarProps> = (props) => {
  return (
    <SnakbarContainer data-testid="snackbar">
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
  box-sizing: border-box;
  bottom: 12px;
  right: 12px;
  height: 48px;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  color: white;
  min-width: 40%;

  p {
    margin: 0 16px 0 0;
  }

  @media (max-width: 800px) {
    min-width: 70%;
  }

  @media (max-width: 560px) {
    width: 100%;
    right: 0;
    bottom: 0;
    border-radius: 0;
  }
`;
