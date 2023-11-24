import { Link } from "react-router-dom";
import "./style.css";
import InitLayout from "../../components/Layout/InitLayout";
const Home = () => {
  return (
    <>
      <InitLayout>
        <div className="home-container">
          <div className="home-box">
            <h1 className="home-welcome">
              Welcome to <span>e</span>Vote!
            </h1>
            <div className="rig-lef-con">
              <div className="left-side-home">
                <h1>Seamless and Secure Platform!!!</h1>
              </div>
              <div className="right-side">
                <img src="/images/right.png" alt="" />
              </div>
            </div>
            <div className="join-us-btn">
              <button className="jon-btn">JOIN US</button>
            </div>
            <div className="already">
              Already have an account ? <Link className="alr-link">Log In</Link>{" "}
            </div>
          </div>
        </div>{" "}
      </InitLayout>
    </>
  );
};

export default Home;
