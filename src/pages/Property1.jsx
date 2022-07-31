import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import TimelinePage from './Timeline';



export default function Property1() {
  return (
    <>
    <MDBCard background='dark' className='text-white' style={{margin:"3%"}}>
      <MDBCardImage overlay src='/images/Nuevo-Vallarta.jpg' alt='...' />
      <MDBCardOverlay>
        <MDBCardTitle>Get to know our properties in Nuevo Vallarta</MDBCardTitle>
        <MDBCardText>
        <h1>Nuevo Vallarta</h1> 
        <br/>
        <p>An ambisius Green brand new project to be development in approx 4.5 hectares; 9 towers, commercial spaces, lagoon, several pools, yoga areas, paddle and bocce courts, green areas, mango trees, jogging tracks, game spaces, snack bar and much more! 
        This complex will have its own sanitization water treatment for common areas. Every unit will be delivery in the high-end of quality standards, own parking space. 1, 2 and 3 bmds units and townhouses to choose. </p>
        </MDBCardText>
        <MDBCardText><h3>Last 3 units</h3></MDBCardText>
      </MDBCardOverlay>
    </MDBCard>
    <TimelinePage/>
    </>
  );
};
