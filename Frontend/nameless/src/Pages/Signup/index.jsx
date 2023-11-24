import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdEmail, MdLock, MdPhoneCallback } from "react-icons/md";
import { GoPersonFill } from "react-icons/go";
import "./style.css";
import InitLayout from "../../components/Layout/InitLayout";
import { useState } from "react";

const SignUp = () => {

  const [authToken, setAuthToken] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const apiUrl = process.env.REACT_APP_BASE_URL;

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extract form data
    const formData = {
      username: e.target.username.value,
      name: e.target.fullName.value,
      password: e.target.password.value,
      phone_number: e.target.phone.value,
    };
    try {
      // Make an HTTP POST request
      const response = await fetch(`${apiUrl}/user/signup/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setAuthToken(data.auth_token.backend);
        localStorage.setItem('authToken', data.auth_token.backend);   
        window.location.href = "/user/notes/";
      } else {
        
   
        const data = await response.json();
        if (data.username!== undefined) {
          alert(data.username);
        } 
        else if (data.phone_number!== undefined) {
          alert(data.phone_number);
        }
  
      
    } 
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your request.");
    }
  };

  return (
    <>
      <InitLayout>
        <div className="login-container">
          <div className="home-box ">
            <div className="rig-lef-con">
              <div className="left-side-home ali">
                {/* <h1 className="home-welcome">
                  Welcome to <span>e</span>Vote!
                </h1> */}
                <h1>Seamless and Secure Notes!!!</h1>
              </div>
              <div className="right-side">
                <div className="login-con">
                  <h2 className="back">LET’S GET STARTED</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="lab-inp rel-inp">
                      <div className="left-icon">
                        <GoPersonFill />
                      </div>
                      <input
                        name="fullName"
                        type="text"
                        className="inp cen"
                        placeholder="FULL NAME"
                      />
                    </div>

                    <div className="lab-inp rel-inp">
                      <div className="left-icon">
                        <GoPersonFill />
                      </div>
                      <input
                        name="username"
                        type="text"
                        className="inp cen"
                        placeholder="USERNAME"
                      />
                    </div>

                    <div className="lab-inp rel-inp">
                      <div className="left-icon">
                        <MdEmail />
                      </div>
                      <input
                        name="email"
                        type="email"
                        className="inp cen"
                        placeholder="EMAIL"
                      />
                    </div>
                    <div className="lab-inp rel-inp">
                      <div className="left-icon">
                        <MdPhoneCallback />
                      </div>
                      <input
                        name="phone"
                        type="tel"
                        className="inp cen"
                        placeholder="PHONE"
                      />
                    </div>

                    <div className="lab-inp rel-inp">
                      <div className="left-icon">
                        <MdLock />
                      </div>
                      <input
                        name="password"
                        type={passwordVisible ? "text" : "password"}
                        className="inp cen"
                        placeholder="PASSWORD"
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
                        name="passwordone"
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
                      <button type="submit" className="l-btn">
                        CREATE ACCOUNT
                      </button>
                    </div>
                  </form>
                  <div className="already" id="dont">
                    Don’t have an account ?{" "}
                    <Link className="alr-link">Sign Up</Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InitLayout>
    </>
  );
};

export default SignUp;
