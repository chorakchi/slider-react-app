import React from "react";
import { ContainerStyled, ImageStyled } from "./styled";

type propsType = {
  data: Array<string>;
  selected: number;
};

export const Slides = (props: propsType) => {
  return (
    <ContainerStyled>
      {props.data.map((item, index) => (
        <ImageStyled src={item} show={props.selected === index} />
      ))}
    </ContainerStyled>
  );
};
