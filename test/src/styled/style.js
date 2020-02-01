import styled from "styled-components";

export const StyledCard = styled.img`
  height: 80px;
  width: 80px;
  background-color: #fff;
  border-radius: 8px;
  padding: 2px;
`;

export const StyledResetButton = styled.button`
  background-color: rgb(1, 102, 117);
  color: #fff;
  border-radius: 5px;
  height: 40px;
  width: 100px;
  font-size: 14px;
`;

export const StyledCardsWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
`;
