import React, { useState } from "react";
import { IconButton, Indicator, Slides, Icon } from "./../../shared";
import { ContainerStyled } from "./styled";

type propsType = {
    data: Array<string>
}

export const Slider = (props : propsType) => {
    const {data } = props
  const length = data.length;
  const [selected, setSelected] = useState(0);

  const handlerBack = () => {
    if (selected >= 1) {
      setSelected(selected - 1);
    } else {
      setSelected(length - 1);
    }
  };

  const handlerNext = () => {
    if (selected >= length - 1) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
  };

  return (
    <ContainerStyled>
      <IconButton Icon={Icon.back} onClick={handlerBack} />
      <div>
        <Slides data={data} selected={selected} />
        <Indicator
          length={data.length}
          onSelect={(data: number) => setSelected(data)}
          selected={selected}
        />
      </div>
      <IconButton Icon={Icon.next} onClick={handlerNext} />
    </ContainerStyled>
  );
};
