import styled from "styled-components";

export const ButtonStyled = styled.div`
  padding: 10px;
  margin: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  box-shadow: 0 0 30px 0 rgba(161, 161, 161, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease-in-out 0s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 50px 0 rgba(161, 161, 161, 0.4);
  }
`;
