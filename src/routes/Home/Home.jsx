import styled from "styled-components";
import HomeImage from "../../components/img/mainvisual.jpg";

const MainVisual = styled.img`
    width: 100%;
`;

const Home=()=>{
    return(
        <MainVisual src={HomeImage} alt="キモヒゲの成長記録" />        
    )
}

export default Home;