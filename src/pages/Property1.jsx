import React from 'react';
import {Link} from 'react-router-dom';
import {
  MDBCard,
  MDBProgress, 
  MDBProgressBar, 
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import TimelinePage from './Timeline';



export default function Property1(props) {
  const {user} = props;
  return (
    <>
    <MDBCard background='dark' className='text-white' style={{margin:"3%"}}>
      <MDBCardImage overlay src='/images/Nuevo-Vallarta.jpg' alt='...' />
      <MDBCardOverlay>
      <br/>
        <MDBCardTitle><h4>Get to know our properties in Nuevo Vallarta </h4></MDBCardTitle>
        <MDBCardText>
        <h1>Nuevo Vallarta</h1> 
        <br/>
        </MDBCardText>
        <MDBCardText><h3>Last 3 units</h3></MDBCardText>
      </MDBCardOverlay>
    </MDBCard>
    {user && (
          <>
                  <button>Edit</button>
                  <button>Delete</button>
            </>
          )}
        <h4 style={{color: 'black'}}>So far we've been constructing the house of your dreams</h4>
            <br/>
              <h3 style={{color: 'black'}}>Take a look at the progress:</h3>
              <br/>
              <div style={{paddingLeft: '5%', paddingRight: '5%'}}>
                <MDBProgress height='40' >
                    <MDBProgressBar striped bgColor='dark' width='25' valuemin={0} valuemax={100}>
                        25%
                    </MDBProgressBar>
                </MDBProgress>
                </div>
                <br/>
                <h3 style={{color: 'black'}}>This are the stages of your property:</h3>
                <br/>
    <TimelinePage/>
    </>
  );
};
