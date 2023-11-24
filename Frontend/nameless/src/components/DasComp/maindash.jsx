import { Link } from "react-router-dom";

const MainDash = () => {
  return (
    <div className="maindas-box">
      <div className="acc-t">Account Dashboard</div>
      <div className="id-name">
        <div className="id-text">ID 0001</div>
        <div className="nam-tst">Makinde Oluwapelumi</div>
      </div>
      <div className="imp-box">
        <div className="important">IMPORTANT NOTICE</div>
        <div className="sim-inm">Some of your info are missing out</div>
        <div className="sim-inm">
          Check your{" "}
          <Link to={"/profile"} className="prov">
            profile page
          </Link>{" "}
          to fill them up ASAP!!!
        </div>
      </div>
    </div>
  );
};

export default MainDash;
