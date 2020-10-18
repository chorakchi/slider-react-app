import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
export const IndicatorStyled = styled.div<{ selected: boolean }>`
  margin: 5px;
  width: 5px;
  height: 5px;
  border-radius: 50px;
  box-shadow: 0 0 30px 0 #000;
  background: ${(props) => (props.selected ? "red" : "white")};
  width: ${(props) => (props.selected ? "8px" : "15px")};
  height: ${(props) => (props.selected ? "8px" : "15px")};
  transition: all 500ms ease-in-out 0s;
  cursor: pointer;
  &:hover {
    background: lightgrey;
  }
`;
