import { styled } from "styled-components";

const All = styled.div`
  display: flex;
  frex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Main = styled.div`
  width: 390px;
  min-height: calc(100vh-194px);
  margin: 0 auto;
  clear: both;

  &::after {
    display: block;
    clear: both;
    font-size: 0.1rem;
    visibility: hidden;
    content: "";
  }
`;

export default All;
