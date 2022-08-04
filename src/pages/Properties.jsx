import React from 'react';

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
} from 'mdb-react-ui-kit';
import {  Link } from 'react-router-dom';

export default function Properties(props) {
  const {user} = props; 
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
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card">
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="https://i.pinimg.com/564x/08/55/4d/08554dfa298a4562ef9612addd9107f2.jpg" className="img-fluid" />
            <Link to="/property1">
              <div className="mask" style= {{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
            </Link>
          </div>
          <div className="card-body">
            <h5 className="card-title">Nuevo Vallarta</h5>
            <p className="card-text">
              Is an ambisius Green brand new project to be development in approx 4.5 hectares; 9 towers, commercial spaces, lagoon, several pools, yoga areas, paddle and bocce courts, green areas, mango trees, jogging tracks, game spaces, snack bar and much more! This complex will have its own sanitization water treatment for …
            </p>
            { user && (
            <Link to="/property1" className="btn btn-dark">See the development</Link>)}
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="https://i.pinimg.com/564x/8b/be/44/8bbe447b31a860ff6d622d719b228a17.jpg" className="img-fluid" />
            <a href="#!">
              <div className="mask" style= {{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Riviera Maya</h5>
            <p className="card-text">
            Exclusive apartments with private Owners Club and a privileged view of the Caribbean Sea. 
            Located in the quiet golf community of Corasol these beautiful apartments offer many luxurious amenities with close access to Playa del Carmen
            </p>
            {user && (
            <a href="#!" className="btn btn-dark">See the development</a>)}
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="https://i.pinimg.com/564x/5d/d5/9a/5dd59a3f50a4d9119308a9fcf6ee1030.jpg"  className="img-fluid" />
            <a href="#!">
              <div className="mask" style= {{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Mexico City</h5>
            <p className="card-text">
            A unique space that adheres to the integral design and the philosophy of conservation of the development surrounded by an extraordinary natural environment to which more than 40 amenities are added that allow healthy integration social and sports activities of its residents, thus creating the ideal place for the healthy development and growth of families.
            </p>
            { user && (
            <a href="#!" className="btn btn-dark">See the development</a>)}
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card">
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="https://i.pinimg.com/564x/25/c7/93/25c793cddb743445375c19e4a5dad55a.jpg" className="img-fluid" />
            <a href="#!">
              <div className="mask" style= {{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Valle de Bravo</h5>
            <p className="card-text">
            This unique concept has sunny gardens, a pool, a dock, a gym, a SPA, a lounge, paddle tennis courts and a children's play area. The complex also 
            has activities such as kayaking and paddle boarding.
            </p>
            { user && (
            <a href="#!" className="btn btn-dark">See the development</a>)}
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="https://i.pinimg.com/564x/b1/75/ee/b175eee9e45f0e61f1341ce54351c85a.jpg" className="img-fluid" />
            <a href="#!">
              <div className="mask" style= {{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Morelos</h5>
            <p className="card-text">
            You will find exclusive amenities, gardens, swimming pools and much more. Loft prototype and 6 residential prototypes, ranging from 148 m2 to 214 m2.
            </p>
            { user && (
            <a href="#!" className="btn btn-dark">See the development</a>)}
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="https://i.pinimg.com/564x/e4/20/65/e42065ddff3a7be29a7d724d266e240a.jpg" className="img-fluid" />
            <a href="#!">
              <div className="mask" style= {{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Post title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p>
            <a href="#!" className="btn btn-dark">Read</a>
          </div>
        </div>
      </div>
    </div>
  </section>
   </div>
   </main>
   </div>
  </MDBCol>
    </>
  );
}