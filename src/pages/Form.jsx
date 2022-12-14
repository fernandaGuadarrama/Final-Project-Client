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
export default function Form() {
  const [Firstname, setFirstname ] = useState("")
  const [Lastname, setLastname ] = useState("")
  const [email, setEmail ] = useState("")
  const [phone, setPhone ] = useState("")
  const [area, setArea ] = useState("")

  const sendData = () => {
    
      fetch(`${process.env.REACT_APP_SERVER_URL}/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Firstname, Lastname, email, phone, area}),
    })
      .then((data) => {
        data.json()
        setFirstname("")
        setLastname("")
      })
      .then(console.log)
      .catch(console.log);

  }

  return (
    <>
    <h2 style={{textColor: "black"}}>Submit your information and receive a 10% discount on the house of your dreams</h2>
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