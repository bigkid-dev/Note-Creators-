import { AiFillDashboard, AiTwotoneMessage } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdHowToVote } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { IoLogOutSharp } from "react-icons/io5";
import "./style.css";
import { NavLink } from "react-router-dom";

const data = [
  {
    label: "Dashboard",
    icon: <AiFillDashboard />,
    to: "/dashboard",
  },
  {
    label: "Profile",
    icon: <BsFillPersonFill />,
    to: "/profile",
  },
  {
    label: "Messages",
    icon: <AiTwotoneMessage />,
    to: "/blogcategories",
  },
  {
    label: "Vote",
    icon: <MdHowToVote />,
    to: "/vote",
  },
  {
    label: "Manifesto",
    icon: <TiDocumentText />,
    to: "/manifesto",
  },
];

/* <div className="item-eac"> */
const SideBar = ({ toggleIcon }) => {
  return (
    <div className={toggleIcon ? "active-side" : "sidebar-container"}>
      <div className="acc-box">MyAccount</div>
      <div className="box-con">
        <div className="list-items">
          {data.map((item, key) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-bar item-eac" : "item-eac"
              }
              to={item.to}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}

          <div className="item-eac out">
            <IoLogOutSharp />
            <div className="item-text">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
