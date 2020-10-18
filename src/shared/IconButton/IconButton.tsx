import React from "react";
import { ButtonStyled } from "./styled";

export const IconButton = (props: any) => {
  return <ButtonStyled {...props}>{props.Icon}</ButtonStyled>;
};
