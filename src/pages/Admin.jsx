  import React from 'react';
  import { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  import "../App.css";

  export default function admin(props) {
    const [listInfo, setLA] = useState([]);
    const { user } = props;
    useEffect(() => {


      //Conect with the server (get)
      fetch(`${process.env.REACT_APP_SERVER_URL}/request`)
        .then((data) => data.json())
        .then((requestInfo) => {
          setLA(requestInfo);
        })
        .catch(console.log);
    }, [ ]);
    return (
      <div>
        <h1>Admin</h1>
        {listInfo.map((requestInfo) => {
          return (
            <p key={requestInfo._id}>
              {requestInfo.Firstname} {requestInfo.Lastname}
              
                      <>
                        <button>Edit</button>
                        <button>Delete</button>
                      </>
            </p>
          );
        })}

     
      </div>
      )
    }
