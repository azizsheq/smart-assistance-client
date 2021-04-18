import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageUser = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // const url = `http://localhost:5055/getUsers`;
        const url = `https://calm-river-92849.herokuapp.com/getUsers`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setUserData(data);
            })
    }, [])

    return (
        <div>
            <h4>Total available users({userData.length}) are - </h4>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                {
                    userData.map(user =>
                        <tbody key={user._id}>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>
                        </tbody>
                    )
                }
            </Table>
        </div>
    );
};

export default ManageUser;