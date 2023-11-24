import VotingCard from "./votingCard";

const MainVote = () => {
  return (
    <div className="maindas-box">
      <div className="id-name vote-ead">
        <div className="id-text wet">VOTING SYSTEM</div>
        <div className="id-text sug">SUG PRESIDENT</div>
        <div className="nam-tst  wet">Go Back</div>
      </div>
      <div className="imp-box vote-box">
        <div className="vote-row">
          <VotingCard />
          <VotingCard />
          <VotingCard />
          <VotingCard />
          <VotingCard />
        </div>
      </div>
    </div>
  );
};

export default MainVote;
