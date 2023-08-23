import styled from "styled-components";
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
    height: 10vh;
    display: flex;
`;

const Logo = styled.img`
    width: 20%;
    height: 100%;
`;

const Pages = styled.ul`
    display: flex;
    margin-left: 100px;
    text-align: right;
`

const PageText = styled.li`
    color: #fff;
    list-style: none;
    font-size: 20px;
    margin: auto;
    padding-left: 20px;
`;

export default Header;