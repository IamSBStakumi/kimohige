import IconImage from "../../components/img/kimohige.jpg";
import { Icon, NameText, WhiteBlock, Introduction } from "../../components/StyledComponents/HomeParts/HomeParts";

function Home() {
  return (
    <WhiteBlock>
      {/* <Title>キモヒゲOFFICIAL WEB SITE</Title> */}
      <Icon src={IconImage} alt="キモヒゲのアイコン" />
      <NameText>キモヒゲ</NameText>
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
  );
}

export default Home;
