  import React from 'react';
  import { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  import "../App.css";

  export default function admin(props) {
    const [listRequestInfo, setLA] = useState([]);
    const { user } = props;
    useEffect(() => {


      //Conect with the server (get)
      fetch(`${process.env.REACT_APP_SERVER_URL}/request`)
        .then((Data) => Data.json())
        .then((requestInfo) => {
          setLA(requestInfo);
        })
        .catch(console.log);
    }, [ ]);
    return (
      <div>
        <h1>Admin</h1>
        {listRequestInfo.map((Data) => {
          return (
            <p key={Data._id}>
              {Data.Firstname} {Data.Lastname}
                  { user && (
                    <>
                    {user.role == "admin" && (    
                         <button>Delete</button>
                       )}
                      </>
                      )}
            </p>
          );
        })}

     
      </div>
      )
    }
