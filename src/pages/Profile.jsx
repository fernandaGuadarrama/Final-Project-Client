import React from 'react';
import { MDBIcon, 
  MDBProgress, 
  MDBProgressBar, 
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
 } from 'mdb-react-ui-kit';


export default function Profile() {
  return (
    <>
    <br></br>
    <h1>Your future is under construction...</h1>
    
    <section className="h-100 gradient-custom-2">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
        <div className="card">
          <div className="rounded-top text-white d-flex flex-row" style={{background:"#000", height:"200px"}}>
            <div className="ms-4 mt-5 d-flex flex-column" style={{width: "150px"}}>
              <img src="https://pbs.twimg.com/profile_images/1551459684426682369/VR61hq8m_400x400.jpg"
                alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                style={{width: "150px", zIndex: "1"}}/>
              <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark"
                style={{zIndex: "1"}}>
                Edit profile
              </button>
            </div>
            <div className="ms-3" style={{marginTop: "130px"}}>
              <h5>Fernanda Guadarrama</h5>
              <p>Mexico City</p>
            </div>
          </div>
          <div className="p-4 text-black" style={{backgroundColor: "#f8f9fa"}}>
            <div className="d-flex justify-content-end text-center py-1">

              <div className="px-3">
                <p className="mb-1 h5"><MDBIcon fas icon="city" /></p>
                <p className="small text-muted mb-0">1 Appartment</p>
              </div>
              <div>
                <p className="mb-1 h5"><MDBIcon fas icon="home" /></p>
                <p className="small text-muted mb-0">1 house</p>
              </div>
            </div>
          </div>
          <div className="card-body p-4 text-black">
            <div className="mb-5">
              <h1 className="lead fw-normal mb-1">Investments under construction...</h1>
              <div className="p-4" style={{backgroundColor: "#f8f9fa"}}>
                <p className="font-italic mb-1">Nuevo Vallarta Beach House</p>
                <p className="font-italic mb-0">Valle de Bravo Cabanna</p>
              </div>
            </div>
      {/* Progress shown as cards for each property */}
            <h5>Progress of your properties...</h5>
            <br/>
            <MDBCard alignment='center'>
      <MDBCardHeader><h2>Nuevo Vallarta</h2></MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle><h7>House near the beach</h7></MDBCardTitle>
        <MDBCardImage position='top' alt='...' src='https://cdn.resize.sparkplatform.com/pvr/2048x1600/true/20210217000321548708000000-o.jpg' />
        <MDBCardText>Spectacular Luxury Villa on small Island in Nuevo Vallarta 7800 ft home includes 4 bedrooms 6 baths large decks with pool and Jacuzzi. 
        <h5>Progress under the construction:</h5></MDBCardText>
        <MDBProgress height='20'>
                <MDBProgressBar striped bgColor='dark' width='50' valuemin={0} valuemax={100}>
                    50%
                </MDBProgressBar>
                </MDBProgress>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'>Updated: 10 days ago</MDBCardFooter>
    </MDBCard>
    <br/>
    <br/>
            <MDBCard alignment='center'>
      <MDBCardHeader><h2>Valle de Bravo</h2></MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle><h7>Little Cabanna</h7></MDBCardTitle>
        <MDBCardImage position='top' alt='...' src='https://images.pexels.com/photos/6342356/pexels-photo-6342356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <MDBCardText>This beautiful development features a spectacular modern architecture with the highest quality of construction and finishes. With a privileged location on the most popular and trendy Valle de Bravo.
        <h5>Progress under the construction:</h5></MDBCardText>
        <MDBProgress height='20'>
                <MDBProgressBar striped bgColor='dark' width='25' valuemin={0} valuemax={100}>
                    25%
                </MDBProgressBar>
                </MDBProgress>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'>Updated: 20 days ago</MDBCardFooter>
    </MDBCard>


            <br/>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="lead fw-normal mb-0">My gallery</p>
              <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
            </div>
            <div className="row g-2">
              <div className="col mb-2">
                <img src="https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="image 1" className="w-100 h-100 rounded-3"/>
              </div>
              <div className="col mb-2">
                <img src="https://images.pexels.com/photos/262405/pexels-photo-262405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="image 1" className="w-100 h-100 rounded-3"/>
              </div>
            </div>
            <div className="row g-2">
              <div className="col">
                <img src="https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="image 1" className="w-100 h-100 rounded-3"/>
              </div>
              <div className="col">
                <img src="https://images.pexels.com/photos/6527069/pexels-photo-6527069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="image 1" className="w-100 h-100 rounded-3"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  );
}