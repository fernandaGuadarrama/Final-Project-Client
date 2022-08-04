  import React from 'react';
  import { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  import "../App.css";
  import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';

  export default function admin(props) {
    const [listRequestInfo, setLA] = useState([]);
    const { user } = props;
    useEffect(() => {


      //Conect with the server (post)
      fetch(`${process.env.REACT_APP_SERVER_URL}/request`)
        .then((Data) => Data.json())
        .then((requestInfo) => {
          setLA(requestInfo);
        })
        .catch(console.log);
    }, [ ]);
    return (
      <div>
      <br/>
      <br/>
        <h1>Information requests</h1>
        <br/>
        <br/>
        {listRequestInfo.map((Data) => {
          return (
            <p key={Data._id} alignment='center' className='d-flex justify-content-center'>
            <MDBCol sm='6' alignment='center' className='d-flex justify-content-center'>
            <MDBCard alignment='center' background='dark' className='text-white'>
                <MDBCardHeader>Information Request</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle><h3>Request for info about  {Data.area}</h3></MDBCardTitle>
                  <MDBCardText><MDBIcon fas icon="user-circle" />  {Data.Firstname} {Data.Lastname}</MDBCardText>
                  <MDBCardText><MDBIcon far icon="envelope" />  { Data.email}</MDBCardText>
                  <MDBCardText><MDBIcon fas icon="phone-square-alt" />  {Data.phone}</MDBCardText>
                  <MDBBtn className='text-dark' color='light' href='#'>Send information <MDBIcon fas icon="mail-bulk" /></MDBBtn>
                </MDBCardBody>
                <MDBCardFooter></MDBCardFooter>
            </MDBCard>
            </MDBCol>
            </p>
          );
        })}

     
      </div>
      )
    }
