import React, { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  import "../App.css";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
} from 'mdb-react-ui-kit';

export default function Properties(props) {
  const [listProperties, setLP] = useState([]);
  const { user } = props;
  useEffect(() => {
      //Conect with the server (post)
      fetch(`${process.env.REACT_APP_SERVER_URL}/properties`)
        .then((Data) => Data.json())
        .then((properties) => {
          setLP(properties);
        })
        .catch(console.log);
    }, [ ]);
    return (
   <>
    <MDBCol>
          <div className='bg-dark shadow-1-strong'>.
                <main className="my-5">
                <div className="container">

              <section className="text-center">
                  <h1 className="gold">Build your home</h1>
                  <h2 className="gold">OWN YOUR FUTURE</h2>
                        <br/>
                  <h4 className="mb-5" style={{color: "gray"}}><strong>OUR PROPERTIES</strong></h4>
                  <div className="row">
                  
                    {listProperties.map((Data) => {
                        console.log(Data)
                    return (
                    
                        <div className="col-lg-4 col-md-12 mb-4">
                          <div className="card">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                              <img src={Data.photos} className="img-fluid" />
                              <Link to="/property1">
                                <div className="mask" style= {{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                              </Link>
                            </div>
                              <div className="card-body">
                                <h5 className="card-title">{Data.property}</h5>
                                <p className="card-text">
                                  {Data.description}
                                </p>
                                { user && (
                                <Link to={`/property1/${Data._id}`} className="btn btn-dark">See the development</Link>)}
                            </div>
                          </div>
                    </div>
                )})}
              </div>
              </section>
              </div>
        </main>
        </div>
    </MDBCol>
          { !user &&(
               <h2>To get to know the details about each property, please  
                  <Link style={{textDecorationColor: "black", textDecoration: "none", fontWeight: "bold" }}to="/auth/signup"><strong> register </strong></Link>
                  or, if you already has an account, 
                  <Link to="/auth/login"> <strong>login.</strong></Link>
                </h2>
           )}
    </>
    );

  
    }   
