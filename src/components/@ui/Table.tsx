import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  height: 100%;
  width: 100%;

  th {
    width: 10vw;
    text-align: left;
    color: ${(props) => props.theme.colors.secondary};
  }

  td {
    color: ${(props) => props.theme.colors.grey[8]};
  }

  th,
  td {
    border-bottom: solid 2px ${(props) => props.theme.colors.primary};
    height: 28px;
  }

  tr:last-child {
    th,
    td {
      border: none;
    }
  }

  .center {
    text-align: center;
  }
`;

export const TableContainer = styled.div`
  box-shadow: ${(props) => props.theme.shadows[4]};
  border-radius: 0 16px 16px 0;

  @media (max-width: 580px) {
    height: 180px;
    width: 200px;
    padding-left: 70px;
    margin-left: -50px;
  }

  @media (min-width: 580px) {
    height: 230px;
    width: 300px;
    padding-left: 100px;
    margin-left: -80px;
  }
`;
