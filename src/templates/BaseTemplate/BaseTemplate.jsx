import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const BaseTemplate = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default BaseTemplate;
