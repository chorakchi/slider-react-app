import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 0 50px 0 rgba(161, 161, 161, 0.4);
  overflow: hidden;
  position: relative;
`;
export const ImageStyled = styled.img<{ show: boolean }>`
  position: absolute;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  transition: all 1000ms ease-in-out 0s;
  opacity: ${(props) => (props.show ? 1 : 0)};
`;
