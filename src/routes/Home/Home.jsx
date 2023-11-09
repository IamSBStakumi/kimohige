import HomeImage from "../../components/img/mainvisual.jpg";
import IconImage from "../../components/img/kimohige.jpg";
import {
  MainVisual,
  Icon,
  Title,
  WhiteBlock,
  Introduction,
} from "../../components/StyledComponents/HomeParts/HomeParts";

function Home() {
  return (
    <>
      <MainVisual src={HomeImage} alt="キモヒゲの成長記録" />
      <WhiteBlock>
        <Icon src={IconImage} alt="キモヒゲのアイコン" />
        <Title>キモヒゲ</Title>
        <Introduction>
          2020年10月より動画投稿を始める．
          <br />
          面白い動画で人に笑ってもらうため，YouTubeで活動中.
          <br />
          1分程度の短いおもしろ動画を
          <br />
          水曜日，土曜日の20時にUPしている．
        </Introduction>
      </WhiteBlock>
    </>
  );
}

export default Home;
