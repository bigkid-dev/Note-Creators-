import { useState } from "react";
import VerifyInput from "./verifyInput";
import Done from "./Done";

const TwoFactor = ({ handleCloseFactorToggle }) => {
  const [factorToggle, setFactorToggle] = useState(false);
  const [verifyToggle, setVerifyToggle] = useState(false);
  const [isDoneToggle, setIsDoneToggle] = useState(false);
  const handleFactorToggle = () => {
    setFactorToggle(true);
  };
  const handleVerifyToggle = () => {
    setVerifyToggle(true);
  };
  const handleIsDoneToggle = () => {
    setIsDoneToggle(true);
  };
  // const handleCloseFactorToggle = () => {
  //   setFactorToggle(false);
  // };
  return (
    <div className="info-right">
      <h1 className="ead">Two-Factor Authentication</h1>
      <div className="info-details padd">
        {isDoneToggle ? (
          <Done handleCloseFactorToggle={handleCloseFactorToggle} />
        ) : (
          <>
            <h1 className="ead nec">Google Authentication App</h1>

            {factorToggle ? (
              <>
                {verifyToggle ? (
                  <VerifyInput handleIsDoneToggle={handleIsDoneToggle} />
                ) : (
                  <>
                    <div className="sim-inm">
                      Please type this code into your authentication app
                    </div>
                    <div className="aut-code-con">
                      <div className="aut-code">LKYU LKYU LKYU LKYU</div>
                      <div className="aut-code">LKYU LKYU LKYU LKYU</div>
                    </div>

                    <div className="goto-btn">
                      <button className="go-btn" onClick={handleVerifyToggle}>
                        Verify
                      </button>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <h1 className="ead">Set Up Manually</h1>
                <div className="sim-inm ">
                  Click on this to get a code that will you will input into your
                  authentication account to have it enabled
                </div>
                <div className="goto-btn">
                  <button className="go-btn" onClick={handleFactorToggle}>
                    Get Code
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TwoFactor;
