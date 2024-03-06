import styled from "styled-components";
import getResponsiveSize from "../../GetResponsible/getResponsible";

const Icon = styled.img`
  width: 24%;
  border-radius: 50%;
  ${getResponsiveSize("margin-top", [100])}
`;

const NameText = styled.h3`
  margin: auto;
  ${getResponsiveSize("font-size", [60])}
`;

const WhiteBlock = styled.div`
  align-items: center;
  justify-content: center;
  width: 85%;
  margin: auto;
  text-align: center;
  background-color: #fff;
`;

const Introduction = styled.p`
  ${getResponsiveSize("font-size", [40])}

  margin: auto;
  text-align: start;
  ${getResponsiveSize("padding-top", [10])}
  ${getResponsiveSize("padding-left", [100])}
`;

export { Icon, NameText, WhiteBlock, Introduction };
