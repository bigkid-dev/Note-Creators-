import Footer from "../Footer";
import Navbar from "../Navbar";

const InitLayout = ({ children }) => {
  return (
    <div className="init">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default InitLayout;
