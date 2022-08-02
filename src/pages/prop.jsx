import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"

//GET DETAIL / UPDATE

const prop = () => {
    const {id} = useParams();

    useEffect(() => {
        fetch("")
    }, [ ])
  return (
    <div>prop con id {id}</div>
  )
}

export default prop