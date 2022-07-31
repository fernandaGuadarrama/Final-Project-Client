import React from 'react';
import {
  MDBInputGroup,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
    <MDBInputGroup
        className='mb-3'
        textAfter='Upload a profile photo'
        textTag='label'
        textProps={{ htmlFor: 'inputGroupFile02' }}
      >
        <input className='form-control' type='file' id='inputGroupFile02' />
      </MDBInputGroup>

      <MDBInputGroup className='mb-3'>
        <MDBBtn outline color='dark'>
          Button
        </MDBBtn>
        <input className='form-control' type='file' />
      </MDBInputGroup>
    </>
    );
  }