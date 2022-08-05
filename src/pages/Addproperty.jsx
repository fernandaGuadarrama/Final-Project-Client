import React, {useState, useEffect }from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [photos, setphotos ] = useState("")
  const [title, setTitle ] = useState("")
  const [location, setLocation ] = useState("")
  const [description, setDescription ] = useState("")
const navigate = useNavigate()

  const sendData = () => {

    fetch(`${process.env.REACT_APP_SERVER_URL}/properties/Addform`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({property, progress, photos, title, location, description}),
    })
    .then((datos)=> navigate("/properties"))
    .then(console.log)
    .catch(console.log);
  }
  return (
    <>
    <br/>
    <h2>Add a property:</h2>
    <br/>
    <div className="container-md" >
    <MDBInputGroup className='mb-3' textBefore='Select an area' width="100wv">
    <select onChange={ (e) => setProperty(e.target.value)} value={property} width="100wv">
        <option>Select an area</option>
        <option value={"Nuevo Vallarta"}>Nuevo Vallarta</option>
        <option value={"Riviera Maya"}>Riviera Maya</option>
        <option value={"Mexico City"}>Mexico City</option>
        <option value={"Morelos"}>Morelos</option>
        <option value={"Valle de Bravo"}>Valle de Bravo</option>
      </select>
      </MDBInputGroup>
      <br/>
      <MDBInput label='Title' id='title' type='text' name="title" value={title} onChange={ (e) => setTitle(e.target.value)}/>
      <br/>
      <MDBInputGroup textBefore='Level of progress'>
      <input className='form-control' type='number' name="progress" value={progress} onChange={ (e) => setProgress(e.target.value)} />
    </MDBInputGroup>
    <br/>
     <MDBInput label='Url photos' id='photo' type='text' name="photos" value={photos} onChange={ (e) => setphotos(e.target.value)}/>
      <br />
      <MDBInput label='Location' id='location' type='text' name="location" value={location} onChange={ (e) => setLocation(e.target.value)}/>
      <br/>
      <MDBInputGroup textBefore='Description'value={description} onChange={ (e) => setDescription(e.target.value)}>
        <textarea className='form-control' />
      </MDBInputGroup>
      <MDBBtn className='mx-2' color='dark' onClick={sendData}>
        Post property
      </MDBBtn>
    </div>
    </>
  )
}