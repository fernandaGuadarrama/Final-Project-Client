import React from 'react';
import "../App.css";
import { MDBInput, 
    MDBInputGroup, 
    MDBDropdown,
    MDBDropdownLink,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownDivider,
    MDBBtn } from 'mdb-react-ui-kit';

export default function Form() {
  return (
    <>
    <h3>Submit your information and receive a 10% discount on the house of your dreams</h3>
    <br/>
    <h2>YOUR FUTURE IS AROUND THE CORNER!</h2>
    <br/>
    <div className="container-md">
        <MDBInputGroup textBefore='First and last name'>
      <input className='form-control' type='text' />
      <input className='form-control' type='text' />
    </MDBInputGroup>
    <br/>
     <MDBInput label='Email for contact' id='E-mail' type='text' />
      <br />
      <MDBInput label='Phone number' id='typePhone' type='tel' />
      <br/>
      <MDBInputGroup className='mb-3' >
        {/* <input className='form-control'  /> */}
        <MDBDropdown>
          <MDBDropdownToggle>Select a property you are interested in</MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem>
              <MDBDropdownLink>Nuevo Vallarta</MDBDropdownLink>
            </MDBDropdownItem>
            <MDBDropdownItem>
              <MDBDropdownLink>Riviera Maya</MDBDropdownLink>
            </MDBDropdownItem>
            <MDBDropdownDivider />
            <MDBDropdownItem>
              <MDBDropdownLink>Mexico City</MDBDropdownLink>
            </MDBDropdownItem>
            
            <MDBDropdownItem>
              <MDBDropdownLink>Morelos</MDBDropdownLink>
            </MDBDropdownItem>
            <MDBDropdownItem>
              <MDBDropdownLink>Valle de Bravo</MDBDropdownLink>
            </MDBDropdownItem>
            <MDBDropdownDivider />
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBInputGroup>
      <MDBBtn className='mx-2' color='dark'>
        Get information about the house of your dreams
      </MDBBtn>
    </div>
    </>
  );
}