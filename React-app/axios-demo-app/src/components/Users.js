import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Users() {

    const [users, setusers] = useState(null)
    
    useEffect(() => {
        axios.get('http://192.168.99.100:8080/rest/users')
        .then(res => {
            setusers(res.data)y
            
        })
    }, [])

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {users && users.map(items => 
                <li style={{marginBottom: "15px", textAlign: "left"}} key={items.id}> ID: {items.id} <br />
                Name: {items.name} <br />
                Email: {items.email} <br />
                Role: {items.role} </li>)}
            </ul>
        </div>
    )
}

export default Users
