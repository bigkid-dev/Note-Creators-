import { Link } from "react-router-dom";

const Done = ({ handleCloseFactorToggle }) => {
  return (
    <div className="done-container">
      <div className="ima-bb">
        <img src="images/checked.png" alt="" />
      </div>
      <div className="you-are">You are all SET!!!</div>
      <div className="back-to">
        click{" "}
        <Link onClick={handleCloseFactorToggle} className="prol">
          here
        </Link>{" "}
        to go back to your profile page
      </div>
    </div>
  );
};

export default Done;
