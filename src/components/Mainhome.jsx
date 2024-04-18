import FeatureSection from "../components/services";
import About from "../components/about";
import Header from "../components/header";
import Footer from "./Footer";

const Mainhome = () => {
  return (
    <>
      <div className="max-w-7*1 mx-auto pt-1 px-6">
        <Header />
      </div>

      <About />
      <FeatureSection />
      <Footer/>
    </>
  );
};

export default Mainhome;
