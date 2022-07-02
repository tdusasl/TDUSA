import React from "react";
import "./App.css";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PastPapers from "./components/PastPapers/PastPapers";
import Stats from "./components/Stats/Stats";
import Structure from "./components/Structure/Structure";
import { useState, CSSProperties } from "react";
import DotLoader from "react-spinners/DotLoader";
import Testimonial from "./components/Testimonial/Testimonial";
const override: CSSProperties = {
  margin: "0 auto",
  borderColor: "red",
  position: "absolute",
  top: "50%",
  left: "50%",
  zIndex:'999'
};

function App() {
  let [loading, setLoading] = useState(true);
  const color = "#000000";

  return (
    <div className="App">
      {/* <div className="loader">
        <DotLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
        />
      </div> */}

      <Header />
      <Home />
      <Events />
      <Stats />
      <Testimonial/>
      <Structure />
      <PastPapers />
      <Footer />
    </div>
  );
}

export default App;
