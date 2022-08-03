import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as CONSTS from "../../utils/consts";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBInputGroup
} from 'mdb-react-ui-kit';

 const Navbar = (props) => {
    const {user, handleLogout} = props; 
    console.log(props)
    let username=" ";
    let profilePic=" ";
    /*librería*/
      const [showNavColor, setShowNavColor] = useState(false);
      const [showNavColorSecond, setShowNavColorSecond] = useState(false);
      const [showNavColorThird, setShowNavColorThird] = useState(false);
      if (user){
        username=user.username
        profilePic=user.profilePic
      }

  return (
      <>
      <MDBNavbar expand='lg' dark bgColor='dark'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='#'>
                  <img className="LogoImg"
                  src="/Logo.png"
                  width="30"
                  alt="MDB Logo"
                  loading="lazy"
                  />
            <h6 className="Title"> Build your home</h6>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            
          </MDBNavbarToggler>
            <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                  <Link className="nav-link" to="/">Home</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                  <Link className="nav-link" to='/properties'>Properties</Link>
              </MDBNavbarItem>
              {!user && (
                <>
                  <MDBNavbarItem>
                      <Link className="nav-link" to="/auth/login">Log in</Link>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                      <Link className="nav-link" to='/auth/signup'>Register</Link>
                  </MDBNavbarItem>
              </>
              )}

              
              { user && ( 
                <>
                    <MDBNavbarItem>
                         <button onClick={handleLogout}>Log out </button>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                            <img
                              src={profilePic }
                              className="rounded-circle"
                              height="22"
                              alt="Portrait of a Woman"
                              loading="lazy"
                              />
                        <Link className="nav-link" to='/profile'>Profile {username}</Link>
                          <MDBNavbarItem>
                          {user.role == "admin" &&
                            <Link  to="/admin">Admin</Link>}
                          </MDBNavbarItem>
                    </MDBNavbarItem>
                </>
                )
              }
              
            </MDBNavbarNav>
          </MDBCollapse>
          </MDBInputGroup>
        </MDBContainer>
        </MDBNavbar>
  

    </>
  );
};
export default Navbar;