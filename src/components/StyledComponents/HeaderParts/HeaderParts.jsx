import styled from "styled-components";
import getResponsiveSize from "../../GetResponsible/getResponsible";

const Wrapper = styled.div`
  background-color: #000;
  width: 100%;
  ${getResponsiveSize("height", [120])}
  position: sticky;
  display: flex;
  z-index: 9999;
  margin: 0 auto;
  top: 0;
`;

const Logo = styled.img`
  width: 20%;
  ${getResponsiveSize("height", [120])}

  &:hover {
    cursor: pointer;
  }
`;

const Pages = styled.ul`
  display: flex;
  text-align: right;
`;

const PageText = styled.li`
  color: #fff;
  list-style: none;
  ${getResponsiveSize("font-size", [32])}
  margin: auto;
  ${getResponsiveSize("padding-right", [20])}

  &:hover {
    cursor: pointer;
  }
`;

export { Wrapper, Logo, Pages, PageText };
