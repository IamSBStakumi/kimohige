import { useNavigate } from "react-router-dom";
import { Wrapper, Logo, Pages, PageText } from "../StyledComponents/HeaderParts/HeaderParts";
import logoImg from "../img/logo.jpg";

function Header() {
  const navigate = useNavigate();

  const Routing = (page) => {
    navigate(page);
  };

  return (
    <Wrapper>
      <Logo src={logoImg} alt="キモヒゲロゴ" onClick={() => Routing("/")} />
      <Pages>
        <PageText onClick={() => Routing("/")}>Home</PageText>
        <PageText>News</PageText>
        <PageText onClick={() => Routing("/member")}>Member</PageText>
        <PageText>YouTube</PageText>
        <PageText>SNS</PageText>
        <PageText>Contacts</PageText>
      </Pages>
    </Wrapper>
  );
}

export default Header;
