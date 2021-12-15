import React from 'react'
import { useState,useEffect } from 'react'

const Dashboard = () => {
    const [user, setuser] = useState([]);
    const [resp,setresp] = useState([]);
    const users = () => {
        fetch('https://reqres.in/api/users?page=2', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then((json) => {

                console.log(json)
                setuser(json.data);
            })
    };
    useEffect(() => {
        users();
    },[]);
    const handleAction = (event) => {
        console.log(event.target.id);
        const userId = event.target.id;
        const action = event.target.name==='delete' ? 'DELETE' : 'PUT';
    
        fetch('https://reqres.in/api/users/'+userId, {
            method: action,
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then((json) => {

                console.log(json)
                // setuser(json.data);
        })
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 dashboardcol p-5" >
                        <h1>User Dashboard</h1>This is nav for dash board
                    </div>
                    <div className="col p-5 ">
                        THis is main page
                        { users}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">First name</th>
                                    <th scope="col">Last name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Profile pic</th>

                                </tr>
                            </thead>
                            <tbody>

                                {user.map(item => {
                                    return <tr id={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.email}</td>
                                        <td><img className="img-fluid img-thumbnail profimg" src={item.avatar} alt="Logo" /></td>
                                        <td><button className="btn btn-primary" name="edit" onClick={handleAction}>Edit</button></td>
                                        <td><button className="btn btn-primary" name="delete" onClick={handleAction}id={item.id}>Delete</button></td>

                                    </tr >

                                })}
                            </tbody>

                        </table>

                            
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard 