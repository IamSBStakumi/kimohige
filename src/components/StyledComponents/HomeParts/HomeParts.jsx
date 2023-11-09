import styled from "styled-components";
import getResponsiveSize from "../../GetResponsible/getResponsible";

const MainVisual = styled.img`
  width: 100%;
`;

const Icon = styled.img`
  border-radius: 50%;
  ${getResponsiveSize("margin-top", [100])}
  width: 24%;
`;

const Title = styled.h3`
  margin: auto;
  ${getResponsiveSize("font-size", [60])}
`;

const WhiteBlock = styled.div`
  width: 100%;
  background-color: #fff;
  margin: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Introduction = styled.p`
  ${getResponsiveSize("font-size", [44])}
  margin: auto;
  text-align: start;
  ${getResponsiveSize("padding-top", [10])}
  ${getResponsiveSize("padding-left", [100])}
`;

export { MainVisual, Icon, Title, WhiteBlock, Introduction };
