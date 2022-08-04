import React, {useState, useEffect }from 'react';
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
import axios from "axios"
export default function Form() {
  const [Firstname, setFirstname ] = useState("")
  const [Lastname, setLastname ] = useState("")
  const [email, setEmail ] = useState("")
  const [phone, setPhone ] = useState("")
  const [area, setArea ] = useState("")

  const sendData = () => {
    
    const Data={Firstname: Firstname, Lastname: Lastname, phone: phone, email: email, area: area}

    console.log(Data)
    fetch(`${process.env.REACT_APP_SERVER_URL}/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    })
    .then((datos)=> datos.json())
    .then((data) => {
      console.log(data)
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhone("");
      setArea("");
    })
    .catch(console.log)
  }

  // fetch(`${process.env.REACT_APP_SERVER_URL}/request/`)
  // .then(res => res.json())
  // .then(info => console.log("infoo", info))
  // .catch(console.log)

  return (
    <>
    <h3>Submit your information and receive a 10% discount on the house of your dreams</h3>
    <br/>
    <h2>YOUR FUTURE IS AROUND THE CORNER!</h2>
    <br/>
    <div className="container-md" >
        <MDBInputGroup textBefore='First  name'>
      <input className='form-control' type='text' name="Firstname" value={Firstname} onChange={ (e) => setFirstname(e.target.value)}/>
      </MDBInputGroup>
      <br/>
      <MDBInputGroup textBefore='Last name'>
      <input className='form-control' type='text' name="Lastname" value={Lastname} onChange={ (e) => setLastname(e.target.value)} />
    </MDBInputGroup>
    <br/>
     <MDBInput label='Email for contact' id='E-mail' type='text' name="email" value={email} onChange={ (e) => setEmail(e.target.value)}/>
      <br />
      <MDBInput label='Phone number' id='typePhone' type='tel' name="phone" value={phone} onChange={ (e) => setPhone(e.target.value)}/>
      <br/>
      <select onChange={ (e) => setArea(e.target.value)} value={area} >
        <option>Select an area</option>
        <option value={"Nuevo Vallarta"}>Nuevo Vallarta</option>
        <option value={"Riviera Maya"}>Riviera Maya</option>
        <option value={"Mexico City"}>Mexico City</option>
        <option value={"Morelos"}>Morelos</option>
        <option value={"Valle de Bravo"}>Valle de Bravo</option>
      </select>

     <MDBBtn className='mx-2' color='dark' onClick={sendData}>
        Get information about the house of your dreams
      </MDBBtn>
    </div>
    </>
  );
}