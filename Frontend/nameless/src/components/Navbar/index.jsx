import "./style.css";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const data = [
  // {
  //   label: "Home",
  //   to: "/",
  // },
  // {
  //   label: "About",
  //   to: "/about",
  // },
  // {
  //   label: "Manifesto",
  //   to: "/manifesto",
  // },
  // {
  //   label: "Vote",
  //   to: "/vote",
  // },
  // {
  //   label: "Contact",
  //   to: "/contact",
  // },
];
const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className=" lon">
          Notes<span>Scribes</span>
        </div>
        <nav className="nav">
          <ul className={`nav-ul ${toggleIcon ? "active" : ""}`}>
            {data.map((item, key) => (
              <li className="nav-li">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "navbar_links"
                  }
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
       
          </ul>
        </nav>
      </div>
      <div className="log-reg-btns">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-li" : "navbar_links"
          }
          to={"/"}
        >
          <button className="log-btn">Log In</button>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-li" : "navbar_links"
          }
          to={"/signup"}
        >
          <button className="log-btn">Sign Up</button>
        </NavLink>
      </div>
      <div className="nav-icon" onClick={handleToggleIcon}>
        {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
};

export default Navbar;
