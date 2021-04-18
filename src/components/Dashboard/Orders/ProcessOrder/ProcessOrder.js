import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const ProcessOrder = () => {
    
    const { id } = useParams();

    const [clickedService, setClickedService] = useState([]);

    let history = useHistory();

    useEffect(() => {
        const url = `http://localhost:5055/getService/${id}`;
        console.log(url);
        // fetch for sending new service data to server 
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClickedService(data);
            })    
    },[])

    const handleProceedPayment = () => {
        history.push("/dashboard/payment");
    }
    
    return (
        <div className="container mt-2">
            <div className="card" style={{width: "18rem"}}>
                <img src={clickedService.imageURL} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{clickedService.name}</h5>
                    <p className="card-text">{clickedService.description}</p>
                    Minimum Charge <h3><span class="badge bg-info">${clickedService.price}</span></h3>
                </div>
                <Button onClick={handleProceedPayment}>Proceed for Payment</Button>
            </div>
        </div>
    );
};

export default ProcessOrder;