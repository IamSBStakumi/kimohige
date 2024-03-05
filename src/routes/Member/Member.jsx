import Hige from "./img/hige.jpeg";
import Megane from "./img/megane.jpeg";
import Staff from "./img/staff.jpeg";

function Member() {
  return (
    <div>
      <image src={Hige} />
      <image src={Megane} />
      <image src={Staff} />
    </div>
  );
}

export default Member;
