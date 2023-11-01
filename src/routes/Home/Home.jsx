import styled from "styled-components";
import HomeImage from "../../components/img/mainvisual.jpg";

const MainVisual = styled.img`
  width: 100%;
  height: 20%;
`;

function Home() {
  return <MainVisual src={HomeImage} alt="キモヒゲの成長記録" />
}

export default Home;
