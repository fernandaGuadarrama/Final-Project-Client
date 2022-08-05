import React, {useState, useEffect} from "react";
import {Link, useParams } from 'react-router-dom';
import {
  MDBCard,
  MDBProgress, 
  MDBProgressBar, 
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import TimelinePage from './Timeline';

const PropertyDetail = () => {
  const {propertyId} = useParams();
  const {id} = useParams();
  const {value, setValue} = useState();
  const {propertiesData, setPropertiesData} = useState();
  const [properties, setProperties] = useState({});
  console.log(useParams())

  useEffect(() => {
      //Conect with the server (post)
      fetch(`${process.env.REACT_APP_SERVER_URL}/properties/${propertyId}`)
        .then((Data) => Data.json())
        .then((properties) => {
          console.log(properties)
          setProperties(properties);
        })
        .catch(console.log);
    }, [ ]);

    function handleInputChange(e){
      const {property, progress, photos, title, location, description, timestramps, id} = e.target;

      return setProperties({...properties, [property]: value})
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_SERVER_URL}/properties/${propertyId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(properties),
        })
        .then((Data) => Data.json())
        .then((propertiesData) => {
          console.log(propertiesData)
        }) 
        .catch(console.log)
      };
      return (
      <>
    properties {properties._id}
                      {properties.title}
    
    <MDBCard background='dark' className='text-white' style={{margin:"3%"}}>
      <MDBCardImage overlay src={properties.photos} alt='...' />
      <MDBCardOverlay>
      <br/>
        <MDBCardTitle><h4>Get to know our properties in Nuevo Vallarta </h4></MDBCardTitle>
        <MDBCardText>
        <h1>{properties.title}</h1> 
        <br/>
        </MDBCardText>
        <MDBCardText><h3>Last 3 units</h3></MDBCardText>
      </MDBCardOverlay>
    </MDBCard>
        <h4 style={{color: 'black'}}>So far we've been constructing the house of your dreams</h4>
            <br/>
              <h3 style={{color: 'black'}}>Take a look at the progress:</h3>
              <br/>
              <div style={{paddingLeft: '5%', paddingRight: '5%'}}>
                <MDBProgress height='40' >
                    <MDBProgressBar striped bgColor='dark' width={properties.progress} valuemin={0} valuemax={100}>
                         {properties.progress}%
                    </MDBProgressBar>
                </MDBProgress>
                </div>
                <br/>
                <h3 style={{color: 'black'}}>This are the stages of your property:</h3>
                <br/>
          <TimelinePage/>
    </>
  );
} 
export default PropertyDetail;
