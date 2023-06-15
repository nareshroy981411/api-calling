import React, { useEffect } from 'react'
import axios from 'axios'

function Axios() {
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((responce)=> console.log(responce.data))
    },[]);

  return (
    <div>Axios</div>
  )
}

export default Axios