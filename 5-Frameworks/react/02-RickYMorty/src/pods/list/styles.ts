import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 1fr 1fr 1fr;
  grid-template-rows: 20px;
  grid-auto-rows: 80px;
  grid-gap: 10px 5px;
  > img {
    width: 80px;
  }
`;

export const ListHeader = styled.span`
  background-color: #2f4858;
  color: white;
  font-weight: bold;
`;

export const FilterContainer = styled.div`
padding: 5px 5px 10px 5px;
display:flex;
gap:10px;

`