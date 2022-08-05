import React from "react";
import "../App.css";
import HomeViews from "./HomeViews";
import TextImage from "./text-image";
import Cards from "./cards";
import Form from "./Form";
import TextAbout from "./textAbout";


function HomePage(props) {
  const {user} = props; 
  return (
    <div>
        <HomeViews/>
        <TextImage/>
        <Cards/>
        <br/>
        <TextAbout/>
        <br/>
        <img src="/images/housesOF.png" className="img-fluid" alt="Build you house, own your future"></img>
        <br/>
        <br/>
        <br/>
        <h1>Your future is around the corner, let us make it real...</h1>
        <br/>
        <br/>
        { !user && (
        <Form/>)}
        <br/>
        <br/>
    </div>
   );
}

export default HomePage;
