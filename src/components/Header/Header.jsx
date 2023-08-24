import styled from "styled-components";
import { getResponsiveSize } from "../GetResponsible/getResponsible";
import logoImg from "../img/logo.jpg";

const Header =()=>{
    return(
        <Wrapper>
            <Logo src={logoImg} alt="キモヒゲロゴ" />
            <Pages>
                <PageText>About</PageText>
                <PageText>News</PageText>
                <PageText>Member</PageText>
                <PageText>YouTube</PageText>
                <PageText>SNS</PageText>
                <PageText>Contacts</PageText>
            </Pages>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    background-color: #000;
    width: 100%;
    height: 8vh;
    display: flex;
`;

const Logo = styled.img`
    ${getResponsiveSize("width", [200])}
    height: 100%;
`;

const Pages = styled.ul`
    display: flex;
    ${getResponsiveSize("margin-left", [0])}
    text-align: right;
`

const PageText = styled.li`
    color: #fff;
    list-style: none;
    ${getResponsiveSize("font-size", [40])}
    margin: auto;
    ${getResponsiveSize("padding-left", [15])}

`;

export default Header;