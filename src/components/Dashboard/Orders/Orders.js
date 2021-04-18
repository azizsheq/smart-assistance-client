import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../App';

const Orders = () => {

    const [ordersData, setOrdersData] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        // const url = `http://localhost:5055/getOrders?email=`+loggedInUser.email;
        const url = `https://calm-river-92849.herokuapp.com/getOrders?email=`+loggedInUser.email;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setOrdersData(data);
            })
    }, [])

    return (
        <div className="">
            Your orders are here -
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Service Title</th>
                        <th>Payment Confirmation ID</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                {
                    ordersData.map(order =>
                        <tbody key={order._id}>
                            <tr>
                                <td>{order.name}</td>
                                <td>{order.paymentId}</td>
                                <td>{order.price}</td>
                            </tr>
                        </tbody>
                    )
                }
            </Table>
        </div>
    );
};

export default Orders;