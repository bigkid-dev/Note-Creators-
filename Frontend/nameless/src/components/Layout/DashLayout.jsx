import Footer from "../Footer";

const DashLayout = ({ children }) => {
  return (
    <div className="dash-layout-container">
      <h1 className="das-nav"></h1>
      {children}
      <Footer />
    </div>
  );
};

export default DashLayout;
