import { Link } from "react-router-dom";
import "./style.css";
import InitLayout from "../../components/Layout/InitLayout";
import {useLocalStorage} from "../../components/utils/storage";
import { useState } from "react";



const Login = () => {

  const [authToken, setAuthToken] = useState(null);
  const apiUrl = process.env.REACT_APP_BASE_URL;
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username: e.target.username.value, 
      password: e.target.password.value,
    };

    try {

      const response = await fetch(`${apiUrl}/user/signin/`, {
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
        window.location.href = "notes/";

      } else {

        const data = await response.json();
        alert(data.non_field_errors); 
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
          <div className="home-box exp">
            <div className="rig-lef-con">
              <div className="left-side-home ali">
             
                <h1>Seamless and Secure Notes!!!</h1>
              </div>
              <div className="right-side">
                <div className="login-con">
                  <h2 className="back">WELCOME BACK!</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="lab-inp">
                      <label htmlFor="">EMAIL or PHONE NUMBER</label>
                      <input name="username" type="text" className="inp" />
                    </div>
                    <div className="lab-inp">
                      <label htmlFor="">Password</label>
                      <input name="password" type="password" className="inp" />
                    </div>
                    <div className="fo-rem">
                      <div className="rember-inp">
                        <input type="checkbox" name="" id="" />
                        <div className="rem-txt">Remember me</div>
                      </div>
                      <Link to={"/forgot"} className="alr-link">
                        <div className="forgot">Forgot password ?</div>
                      </Link>
                    </div>
                    <div className="lo-btn join-us-btn ">
                      {/* <Link to={"/"}> */}
                        <button type="submit" className="l-btn">LOG IN</button>
                      {/* </Link> */}
                    </div>
                  </form>
                  <div className="already" id="dont">
                    Don’t have an account ?{" "}
                    <Link className="alr-link ">Sign Up</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </InitLayout>
    </>
  );
};

export default Login;
