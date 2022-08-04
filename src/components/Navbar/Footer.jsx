import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-light text-center text-white' style={{position:"relative", bottom:"0", width:"100vw", marginTop:"10%"}}>
      <div className='container p-4 pb-0'>
      <div className='text-center p-3' style={{color:"GrayText"}}>
        © 2022 Coded by: 
        <a style={{color:"GrayText"}}>
          . Fernanda Guadarrama Guzmán
        </a>
      </div>
        <section className='mb-4'>
          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='https://www.facebook.com/fernandaguadarrama10'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#55acee' }}
            href='https://twitter.com/Pau_Rawr'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/fernandaguadarrama/'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/in/fernanda-guadarrama/'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/fernandaGuadarrama'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </a>
        </section>
      </div>
    </MDBFooter>
  );
}