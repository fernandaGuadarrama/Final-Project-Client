import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as CONSTS from "../../utils/consts";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';


const Navbar = (props) => {
  const [showNavText, setShowNavText] = useState(false);
  const {user, handleLogout} = props; 
  console.log(props)
  let username=" ";
  let profilePic=" ";
  let role="";
  if (user){
    username=user.username
    profilePic=user.profilePic
    role=user.role
  }
  return (
    <MDBNavbar expand='lg' dark bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' style={{paddingRigth:"1%", paddingLeft:"2%"}}><h6>Build your home</h6></MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavText(!showNavText)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavText}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
              <Link className="nav-link" to="/">Home</Link>
               </MDBNavbarLink>
            </MDBNavbarItem>
            { user && (
            <MDBNavbarItem>
              <MDBNavbarLink href='#'><Link className="nav-link" to='/properties'>Properties</Link></MDBNavbarLink>
            </MDBNavbarItem>
            )
              }
              {role == "admin" &&
              <>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'><Link className="nav-link" to='/Addproperty'>Add property</Link></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'><Link className="nav-link" to='/admin'>Information Requests</Link></MDBNavbarLink>
            </MDBNavbarItem>
            </>
            }
          </MDBNavbarNav>
                        {role == "admin" &&
                          <div className="d-flex justify-content-center">
                          <Link  to="#"><h3>Admin</h3></Link>
                          </div>}
          {!user && (
            <>
              <span className='navbar-text'> <Link className="nav-link" to="/auth/login">LogIn</Link> </span>
              <span className='navbar-text'> <Link className="nav-link" to='/auth/signup'>Register</Link> </span>
            </>
              )}

              { user && ( 
                <>
                        
                        <span className='navbar-text'>
                            <Link className="nav-link" to='/profile'>Welcome <h6>{username}</h6></Link>
                        </span>
                        <span className='navbar-text'>
                            <img
                              src={profilePic}
                              className="rounded-circle"
                              height="36"
                              alt="Profile picture"
                              loading="lazy"
                              />
                        </span>
                        
                        <span className='navbar-text'>

                          </span>
                          <div className="d-flex justify-content-end" style={{paddingRigth:"2%", paddingLeft:"1.5%"}}>
                              <button size='sm' className="btn btn-light" 
                                  onClick={handleLogout}>LogOut 
                              </button>
                          </div>
                     </>
                )
              }
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default Navbar;