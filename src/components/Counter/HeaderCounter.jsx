import { BsFillHeartFill, BsFillCartFill } from "react-icons/bs";
import "../../assets/styles/components/headerCounter/headerCounter.scss";
// import { BsFillHeartFill, BsFillCartFill } from "react-icons/bs";

export default function HeaderCounter() {
  return (
    <div className="headerCounterBox">
      <div>
        <BsFillHeartFill />
        <span>Lorem ipsum dolor</span>
      </div>
      <div>
        <BsFillCartFill />
        <span>Lorem ipsum dolor2</span>
      </div>
      {/* // <div>
      //       <BsFillHeartFill />
      //       <span>Lorem ipsum dolor</span>
      //     </div>
      //     <div>
      //       <BsFillCartFill />
      //       <span>Lorem ipsum dolor2</span>
      //     </div> */}
    </div>
  );
}
