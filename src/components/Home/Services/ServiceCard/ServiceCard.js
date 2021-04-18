import React from 'react';
import { useHistory } from 'react-router';
import './ServiceCard.css'

const ServiceCard = ({service}) => {

    const {name, description, price, imageURL, _id} = service;
    
    const history = useHistory();

    const handleClickedService = (id) => {
        const url = `/dashboard/processOrder/${id}`;
        history.push(url);
    }

    return (
        <div className="col">
            <div className="card h-100">
                <img src={imageURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <span className="badge bg-success priceBadge">$ {price}</span>
                </div>
                <div className="card-footer d-flex justify-content-end">
                    <button type="button" className="btn btn-info" onClick={() => handleClickedService(_id)}>Click to Order</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;