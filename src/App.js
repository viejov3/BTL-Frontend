import NavBar from "./components/navBar";

import Design from "./components/Design bg";
import { Routes, Route } from "react-router-dom";
import Interior from "./components/Interior";

import MainProject from "./components/MainProject";
import Firm from "./components/Firm";
import Team from "./components/Team";
import MyForm from "./components/Contactform";
import Mainhome from "./components/Mainhome";
import Shinesollon from "./components/shinesollon";
import { Toaster } from "react-hot-toast";
import StepDesign from "./components/STEP";
import Saaj from "./components/Saaj";
import VS from "./components/VSResidence";


function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <NavBar />
      <Routes>
        <Route path="/" element={<Mainhome />} />
        <Route path="/MainProject" element={<MainProject />} />
        <Route path="/Interior" element={<Interior />} />
        <Route path="/Firm" element={<Firm />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/MyForm" element={<MyForm />} />
        <Route path="/Shine" element={<Shinesollon />} />
        <Route path="/Step" element={<StepDesign />} />
        <Route path="/Saaj" element={<Saaj />} />
        <Route path="/Vs" element={<VS />} />
      </Routes>
     
      <Design />
    </div>
  );
}

export default App;
