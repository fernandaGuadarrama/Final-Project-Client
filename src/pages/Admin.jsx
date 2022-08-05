import React, { useState, useEffect} from "react";
import {useRef } from "react";
import emailjs from 'emailjs-com';
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
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_sz0e4fl', form.current, 'EXm19ewlnFLrnpSe0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
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
            <>

            <p key={Data._id} alignment='center' className='d-flex justify-content-center'>
            <MDBCol sm='6' alignment='center' className='d-flex justify-content-center'>
            <MDBCard alignment='center' background='dark' className='text-white'>
                <MDBCardHeader>Information Request</MDBCardHeader>
                <MDBCardBody ref={form} onSubmit={sendEmail}>
                  <MDBCardTitle><h3>Request for info about  {Data.area}</h3></MDBCardTitle>
                  <MDBCardText><MDBIcon fas icon="user-circle" name="fullname" />   {Data.Firstname} {Data.Lastname}</MDBCardText>
                  <MDBCardText><MDBIcon far icon="envelope" />  { Data.email}</MDBCardText>
                  <MDBCardText><MDBIcon fas icon="phone-square-alt" />  {Data.phone}</MDBCardText>
                  <MDBBtn className='text-dark' color='light' href='#' type="submit" value="Send">Send information <MDBIcon fas icon="mail-bulk" /></MDBBtn>
                </MDBCardBody>
                <MDBCardFooter></MDBCardFooter>
            </MDBCard>
            </MDBCol>
            </p>
            </>
          );
        })}

     
      </div>
      )
    }
