import styled from "styled-components";
import getResponsiveSize from "../../GetResponsible/getResponsible";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 9999;
  display: flex;
  width: 100%;
  margin: 0 auto;
  background-color: #000;
  ${getResponsiveSize("height", [120])}
`;

const Logo = styled.img`
  width: 20%;
  ${getResponsiveSize("height", [120])}

  &:hover {
    cursor: pointer;
  }
`;

const Pages = styled.div`
  display: flex;
  width: 80%;
  text-align: right;
`;

const PageText = styled.p`
  margin: auto;
  color: #fff;
  list-style: none;
  ${getResponsiveSize("font-size", [32])}
  ${getResponsiveSize("padding-right", [20])}

  &:hover {
    cursor: pointer;
  }
`;

export { Wrapper, Logo, Pages, PageText };
