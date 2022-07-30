import React from 'react';
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function HomeViews() {
  return (
    <header>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://maarquitectura.com.mx/wp-content/uploads/2020/04/01-1.jpg')", height: 400 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3' >Build your home</h1>
              <h4 className='mb-3'>OWN YOUR FUTURE</h4>
              <Link className='nav-link btn btn-outline-light btn-lg' to="/properties" role='button'>
                See our properties
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}