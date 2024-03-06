import styled from "styled-components";
import getResponsiveSize from "../../GetResponsible/getResponsible";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MemberWrapper = styled.div`
  width: 25%;
  text-align: center;
  background-color: #fff;
`;

const Img = styled.img`
  width: 100%;
`;

const NameText = styled.h2`
  ${getResponsiveSize("font-size", [32])}
`;

const SubText = styled.p`
  ${getResponsiveSize("font-size", [14])}
`;

export { Wrapper, MemberWrapper, Img, NameText, SubText };
