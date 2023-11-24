import { useState } from "react";

const VerifyInput = ({ handleIsDoneToggle }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <div className="sim-inm">
        Please type this code into your authentication app
      </div>
      <form action="">
        <div className="inp-conn">
          <input
            type="tel"
            className="inp-verify"
            placeholder="Verification Code"
            maxLength={6}
            onChange={handleInputChange}
          />
          {inputValue.length === 6 && (
            <div className="proc-btn">
              <button className="prc-btn" onClick={handleIsDoneToggle}>
                PROCEED
              </button>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default VerifyInput;
