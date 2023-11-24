import { useState } from "react";
import Info from "./Info";

const ProfileMain = () => {
  const [factorToggle, setFactorToggle] = useState(false);
  const handleFactorToggle = () => {
    setFactorToggle(true);
  };
  const handleCloseFactorToggle = () => {
    setFactorToggle(false);
  };
  return (
    <div className="maindas-box">
      <div className="acc-t">My Profile</div>

      <div className="imp-box pro-box">
        <div className="info-container">
          <div className="info-left">
            <div className="info-left-top" onClick={handleCloseFactorToggle}>
              <img src="images/right.png" alt="" />
            </div>
            <div className="info-left-down">
              <div className="top-head">Notification</div>
              <div className="warn-con">
                <div className="warning-text">
                  You are not allowed to vote or be voted for because some of
                  your info are missing.
                </div>
                <span>FILL UP YOUR INFO WHERE REQUIRED !!!</span>
              </div>
            </div>
          </div>
          <div className="info-right-con">
            <Info
              handleFactorToggle={handleFactorToggle}
              factorToggle={factorToggle}
              handleCloseFactorToggle={handleCloseFactorToggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
