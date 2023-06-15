// import React, { useEffect } from 'react'

// function Fetch() {
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(response => response.json())
//         .then(json => console.log(json))
//     },[])
//   return (
//     <div>Fetch</div>
//   )
// }

// export default Fetch

import React, { useEffect, useState } from 'react'

function Fetch() {
    const [users, setUsers] = useState([])
    
    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUsers(data)
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
        {users.length > 0 && (
            <table>
                {users.map((user,id) => (
                    // <li key={user.id}>{user.userId}:{user.title}:{user.completed}</li>
                    <tr key={id}>
                            <td >{user.id}</td>
                            <td >{user.title} </td>
                    </tr>
                ))}
            </table>
        )}
    </div>
  )
}

export default Fetch