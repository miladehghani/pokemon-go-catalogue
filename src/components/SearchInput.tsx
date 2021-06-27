import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import styled from "styled-components";
import { Input } from "./@ui/Input";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export const SearchInput = (props: SearchInputProps) => {
  const { onChange, value, style, ...inputProps } = props;
  const [searchText, setSearchText] = useState("");

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    props.onChange(e);
  };

  const clearInput = () => {
    setSearchText("");
    props.onChange({
      target: { value: "" },
    } as unknown as ChangeEvent<HTMLInputElement>);
  };

  return (
    <Container style={style}>
      <SearchIcon className="material-icons">search</SearchIcon>
      <Input
        style={{ paddingLeft: "calc(1.5% + 24px)" }}
        placeholder={"Search by name"}
        value={searchText}
        onChange={inputChangeHandler}
        {...inputProps}
      />
      <ClearButton className="material-icons clickable" onClick={clearInput}>
        cancel
      </ClearButton>
    </Container>
  );
};

const SearchIcon = styled.span`
  position: absolute;
  left: 1%;
  top: 50%;
  transform: translateY(-50%);
`;

const ClearButton = styled.span`
  position: absolute;
  right: 1%;
  top: 50%;
  transform: translateY(-50%);
`;

const Container = styled.div`
  position: relative;
`;
