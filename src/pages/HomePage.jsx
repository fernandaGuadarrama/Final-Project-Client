import React from "react";
import "../App.css";
import HomeViews from "./HomeViews";
import TextImage from "./text-image";
import Cards from "./cards";


function HomePage() {
  return (
    <div>
        <HomeViews/>
        <TextImage/>
        <Cards/>
        <br/>
        <img src="/images/housesOF.png" className="img-fluid" alt="Responsive image"></img>
        <br/>
        <br/>
    </div>
   );
}

export default HomePage;
