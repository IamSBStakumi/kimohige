import { styled } from "styled-components";
import getResponsiveSize from "../GetResponsible/getResponsible";

interface BgImageProps {
  $bgimage?: string;
}

const All = styled.div`
  display: flex;
  frex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Main = styled.div<BgImageProps>`
  width: 100%;
  background-image: url(${(props) => props.$bgimage});
  background-repeat: repeat;
  background-size: auto;
  position: flexed;
`;

export const MainVisual = styled.img`
  width: 100%;
`;

export const Title = styled.h2`
  margin: 0;
  ${getResponsiveSize("font-size", [60])}
  text-align: center;
  background-color: #fff;
`;

export default All;
