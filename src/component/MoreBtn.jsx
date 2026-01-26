import "./MoreBtn.css";
import {arrow } from "../assets/Image";

function MoreBtn() {
  return (
    <button className="more">
      <img src={arrow} />
      了解更多
    </button>
  );
}

export default MoreBtn;
