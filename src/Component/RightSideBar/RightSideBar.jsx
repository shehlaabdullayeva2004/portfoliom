import "./RightSideBar.scss";
import { Link } from "react-router-dom";

export default function RightSideBar() {
  return (
    <div className="rightSideBar">
      <ul>
        <li className="rightSideBarIcon">
          <Link to={"/"} className="rightSideBarLink">
            <span>Home</span>
            <i className="fa-solid fa-house"></i>
          </Link>
        </li>

        <li className="rightSideBarIcon">
          <Link to={"/"} className="rightSideBarLink">
            <i className="fa-solid fa-bars-staggered"> </i>
            <span>Work</span>
          </Link>
        </li>
        <li className="rightSideBarIcon">
          <Link to={"/"} className="rightSideBarLink">
            <i className="fa-regular fa-user"> </i>
            <span>About</span>
          </Link>
        </li>
        <li className="rightSideBarIcon">
          <Link to={"/"} className="rightSideBarLink">
            <i className="fa-regular fa-user"> </i>
            <span>Home</span>
          </Link>
        </li>
        <li title="salam" className="rightSideBarIcon">
          <Link to={"/"} className="rightSideBarLink">
            <i className=" fa-regular fa-envelope"> </i>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
