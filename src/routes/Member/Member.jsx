import {
  Wrapper,
  MemberWrapper,
  Img,
  NameText,
  SubText,
} from "../../components/StyledComponents/Member/MemberComponents";
import Hige from "./img/hige.jpeg";
import Megane from "./img/megane.jpeg";
import Staff from "./img/staff.jpeg";

const Member = () => (
  <Wrapper>
    <MemberWrapper>
      <Img src={Hige} alt="キモヒゲ" />
      <NameText>キモヒゲ</NameText>
      <SubText>
        一番出てくる人
        <br />
        前は本名で活動していたが
        <br />
        名前を奪われた
      </SubText>
    </MemberWrapper>
    <MemberWrapper>
      <Img src={Megane} alt="キモメガネ" />
      <NameText>キモメガネ</NameText>
      <SubText>
        たまに出てくる人
        <br />
        前はレギュラーだったが
        <br />
        演技がクサすぎるので降格した
      </SubText>
    </MemberWrapper>
    <MemberWrapper>
      <Img src={Staff} alt="キモスタッフ" />
      <NameText>キモスタッフ</NameText>
      <SubText>
        全然出てこない人
        <br />
        技術担当として このサイトを作ったり
        <br />
        グリーンバック編集を担当する
      </SubText>
    </MemberWrapper>
  </Wrapper>
);

export default Member;
