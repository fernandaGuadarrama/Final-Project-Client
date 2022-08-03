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

export default function Addproperty() {
  const [property, setProperty ] = useState("")
  const [progress, setProgress] = useState("")
  const [photo, setPhoto ] = useState("")
  const [title, setTitle ] = useState("")
  const [location, setLocation ] = useState("")
  const [description, setDescription ] = useState("")


  const sendData = () => {
    const Data={property, progress, photo, title, location, description}
    console.log(Data)
  }



  return (
    <>
    <h2>Add a property:</h2>
    <br/>
    <div className="container-md" >
        <MDBInputGroup textBefore='First  name'>
      <input className='form-control' type='text' name="property" value={property} onChange={ (e) => setProperty(e.target.value)}/>
      </MDBInputGroup>
      <br/>
      <MDBInputGroup textBefore='Last name'>
      <input className='form-control' type='text' name="progress" value={progress} onChange={ (e) => setProgress(e.target.value)} />
    </MDBInputGroup>
    <br/>
     <MDBInput label='Url photo' id='E-mail' type='text' name="photo" value={photo} onChange={ (e) => setPhoto(e.target.value)}/>
      <br />
      <MDBInput label='Title' id='typePhone' type='text' name="title" value={title} onChange={ (e) => setTitle(e.target.value)}/>
      <br/>
      <MDBInput label='Location' id='typePhone' type='text' name="location" value={location} onChange={ (e) => setLocation(e.target.value)}/>
      <br/>
      <MDBBtn className='mx-2' color='dark' onClick={sendData}>
        Post property
      </MDBBtn>
    </div>
    </>
  );
}