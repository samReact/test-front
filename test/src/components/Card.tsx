import React from "react";
import Apple from "../assets/images/apple.png";
import { StyledCard } from "../styled/style";

const Card = ({ source }: { source: String }) => {
  return <StyledCard src={source} alt="card" />;
};

export default Card;
