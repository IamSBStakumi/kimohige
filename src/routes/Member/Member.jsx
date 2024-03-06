import Hige from "./img/hige.jpeg";
import Megane from "./img/megane.jpeg";
import Staff from "./img/staff.jpeg";

const Member = () => (
  <div>
    <img src={Hige} alt="キモヒゲ" />
    <img src={Megane} alt="キモメガネ" />
    <img src={Staff} alt="キモスタッフ" />
  </div>
);

export default Member;
