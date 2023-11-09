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
  width: 100%;
  background-image: url(${(props) => props.bgimage});
  background-repeat: repeat;
  background-size: auto;
`;

export default All;
