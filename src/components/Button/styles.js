import styled from "styled-components";

export const Button = styled.button`
  border-radius: 18px;
  padding: 10px 32px;
  background: linear-gradient(180deg, #fe7e5d 0%, #7f3841 100%);
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 18px;
  width: fit-content;

  &:hover {
    opacity: 0.8;

  }
  &:active {
    opacity: 0.6;
  }
`
