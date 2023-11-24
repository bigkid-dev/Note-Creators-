import TwoFactor from "./twoFactor";

const Info = ({
  handleFactorToggle,
  factorToggle,
  handleCloseFactorToggle,
}) => {
  return (
    <>
      {factorToggle ? (
        <TwoFactor handleCloseFactorToggle={handleCloseFactorToggle} />
      ) : (
        <div className="info-right">
          <h1 className="ead">Basic Info</h1>
          <div className="info-details">
            <div className="det-con">
              <div className="n-text">Name</div>
              <div className="n-text">Makinde Oluwapelumi</div>
            </div>
            <div className="det-con">
              <div className="n-text">Username</div>
              <div className="n-text cen">Daddy Yo</div>
            </div>
            <div className="det-con">
              <div className="n-text">Birthday</div>
              <div className="n-text cen">6/10/1983</div>
            </div>
            <div className="det-con">
              <div className="n-text">Mobile Number</div>
              <div className="n-text ">080966343535</div>
            </div>
            <div className="det-con">
              <div className="n-text">Email Address</div>
              <div className="n-text "> sample@mail.com</div>
            </div>
            <div className="det-con">
              <div className="n-text">Password</div>
              <div className="n-text cen">*********</div>
            </div>
            <div className="det-con">
              <div className="n-text">Two-Factor Authentication</div>
              <div className="n-text red cen" onClick={handleFactorToggle}>
                !!!
              </div>
            </div>
            <div className="det-con">
              <div className="n-text">Biometrics</div>
              <div className="n-text"></div>
            </div>
            <div className="det-con">
              <div className="n-text">Eligibility</div>
              <div className="n-text">Not-Allowed</div>
            </div>
            <div className="det-con">
              <div className="n-text">Privacy Policy</div>
              <div className="n-text"></div>
            </div>
            <div className="det-con rem">
              <div className="n-text">I need help</div>
              <div className="n-text"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Info;
