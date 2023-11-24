import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdLock } from "react-icons/md";

import "./style.css";
import InitLayout from "../../components/Layout/InitLayout";
import { useState } from "react";
const Forgot = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <InitLayout>
        <div className="login-container">
          <div className="home-box exp">
            <div className="rig-lef-con">
              <div className="left-side-home ali">
                {/* <h1 className="home-welcome">
                  Welcome to <span>e</span>Vote!
                </h1> */}
                <h1>Seamless and Secure Platform!!!</h1>
              </div>
              <div className="right-side">
                <div className="login-con">
                  <h2 className="back">NEW PASSWORD</h2>
                  <form action="">
                    <div className="lab-inp rel-inp">
                      <div className="left-icon">
                        <MdLock />
                      </div>
                      <input
                        type={passwordVisible ? "text" : "password"}
                        className="inp cen"
                        placeholder="NEW PASSWORD"
                      />
                      <div
                        className="rigt-icon"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? (
                          <AiFillEyeInvisible />
                        ) : (
                          <AiFillEye />
                        )}
                      </div>
                    </div>
                    <div className="lab-inp rel-inp">
                      <div className="left-icon">
                        <MdLock />
                      </div>
                      <input
                        type={passwordVisible ? "text" : "password"}
                        className="inp cen"
                        placeholder="CONFIRM PASSWORD"
                      />
                      <div
                        className="rigt-icon"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? (
                          <AiFillEyeInvisible />
                        ) : (
                          <AiFillEye />
                        )}
                      </div>
                    </div>
                    <div className="lo-btn join-us-btn ">
                      <Link to={"/"}>
                        <button className="l-btn">Send</button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </InitLayout>
    </>
  );
};

export default Forgot;
