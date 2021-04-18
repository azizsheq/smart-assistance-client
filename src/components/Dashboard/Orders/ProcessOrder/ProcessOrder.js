import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../../App';
import Payment from '../Payment/Payment';

const ProcessOrder = () => {
    
    const { id } = useParams();

    const [clickedService, setClickedService] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        const url = `http://localhost:5055/getService/${id}`;
        console.log(url);
        // fetch for sending new service data to server 
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setClickedService(data);
            })    
    },[])


    const handlePaymentSuccess = paymentId => {

        const orderDetails = {
            ...loggedInUser,
            ...clickedService,
            paymentId
        };

        const url = `http://localhost:5055/addOrder`;
        // fetch for sending new product data to server 
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderDetails),
        })
            .then(response => {
                // console.log("Server side response: ", response);
                if(response) {
                    alert('Order Placement Successful !')
                } 
            })
            .catch(error => {
                console.error('Server side Error:', error);
            });
    }
    
    return (
        <div className="container mt-2 row">
            <div className="col-md-6">
                <div className="card" style={{width: "18rem"}}>
                    <img src={clickedService.imageURL} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{clickedService.name}</h5>
                        <p className="card-text">{clickedService.description}</p>
                        Minimum Charge <h3><span class="badge bg-info">${clickedService.price}</span></h3>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <Payment handlePayment={handlePaymentSuccess}/>
            </div>
        </div>
    );
};

export default ProcessOrder;