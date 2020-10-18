import React from "react";
import { ContainerStyled, IndicatorStyled } from "./styled";

type porpsType = {
  length: number;
  onSelect: Function;
  selected: number;
};

export const Indicator = (props: porpsType) => {
  let elements: Array<object> = [];

  for (let i = 0; i < props.length; i++) {
    elements.push(
      <IndicatorStyled
        key={"Indicator-" + i}
        selected={i === props.selected}
        onClick={() => props.onSelect(i)}
      />
    );
  }
  return <ContainerStyled>{elements}</ContainerStyled>;
};
