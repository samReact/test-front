import styled from "styled-components";

export const StyledCard = styled.img`
  height: 75px;
  width: 75px;
  justify-self: center;
  @media (max-width: 768px) {
    height: 55px;
    width: 55px;
  }
  opacity: ${props => {
    switch (props.status) {
      case "idle":
        return 0;
      case "checked":
        return 1;
      case "disabled":
        return 0.7;
      default:
        return 0;
    }
  }};
`;
export const StyledCardWrapper = styled.button`
  background-color: ${props => {
    switch (props.status) {
      case "disabled":
        return "#BAD6DC";
      default:
        return "#fff";
    }
  }};
  height: 80px;
  width: 80px;
  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
  }
  border-radius: 8px;
  padding: 2px;
  transition: 0.4s;
  &:hover {
    transform: ${props => {
      if (
        (props.status === "checked" && props.played) ||
        (props.status === "idle" && !props.played)
      ) {
        return "scale(1.1)";
      }
    }};
  }
`;

export const StyledResetButton = styled.button`
  background-color: rgb(1, 102, 117);
  border-color: rgb(1, 102, 117);
  color: #fff;
  border-radius: 5px;
  height: 40px;
  width: 100px;
  font-size: 14px;
  transition: 0.4s;
  &:hover {
    background: #fff;
    color: rgb(1, 102, 117);
    font-weight: bold;
  }
`;

export const StyledCardsWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: repeat(4, 80px);
  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 60px);
    grid-template-rows: repeat(4, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

export const StyledGameWrapper = styled.div`
  background-color: #017d8f;
  display: grid;
  grid-template-columns: 185px 185px;
  grid-template-rows: 50px 400px 50px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 135px);
    grid-template-rows: 40px 300px 40px;
    padding: 1rem;
  }
  padding: 2rem;
`;

export const StyledSubtitle = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;

export const StyledNumbers = styled.span`
  color: rgb(255, 255, 255);
  font-size: 28px;
`;
