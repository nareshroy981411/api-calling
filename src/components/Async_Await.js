import React, { useEffect } from 'react'
import axios from 'axios'

function AsyncAwait() {
    useEffect(()=>{
        (async ()=>{
            try{
                const result = await axios.get('https://jsonplaceholder.typicode.com/todos') 
                console.log(result.data);

            }catch (error) {
                console.error(error);
            }
        })()
    },[])
  return (
    <div>Async_Await</div>
  )
}

export default AsyncAwait