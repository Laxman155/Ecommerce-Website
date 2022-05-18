import React, { useEffect, useState } from 'react'

const Api = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
                setUsers(resp)
            })
    }, [])
    return (
        <div className='table'>
            <table class="table table-success table-striped ">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td class="table-primary">{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.website}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Api;