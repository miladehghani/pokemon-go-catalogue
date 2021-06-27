import styled from "styled-components";

interface FavoriteButtonProps {
  checked?: boolean;
  onChange?: () => void;
}

export const FavoriteButton = (props: FavoriteButtonProps) => {
  return (
    <Span
      className="material-icons"
      onClick={() => props.onChange && props.onChange()}
    >
      {props.checked ? "favorite" : "favorite_border"}
    </Span>
  );
};

const Span = styled.span`
  color: red;
  cursor: pointer;
`;
