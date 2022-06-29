import React from "react";
import "./App.css";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PastPapers from "./components/PastPapers/PastPapers";
import Structure from "./components/Structure/Structure";

function App() {
  return (
    <div className="App">
      
        <Header />
        <Home/>
        <Events/>
        <Structure/>
        <PastPapers/>
        <Footer/>
     
    </div>
  );
}

export default App;
