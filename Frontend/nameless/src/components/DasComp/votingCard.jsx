import { Link } from "react-router-dom";

const VotingCard = () => {
  return (
    <div className="vote-card-box">
      <div className="vote-card-container">
        <div className="image-votee">
          <img src="images/right.png" alt="" />
        </div>
        <div className="last-name-text">MAKINDE</div>
        <div className="first-name-text">OLUWAPELUMI</div>
        <Link to={"/manifesto"} className="to-mani">
          VIEW MANIFESTO
        </Link>
      </div>
      <button className="vote-btn">Vote</button>
    </div>
  );
};

export default VotingCard;
