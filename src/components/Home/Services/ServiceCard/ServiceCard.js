import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({service}) => {
    const {name, details, price, image} = service;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{details}</p>
                    <span className="badge bg-success priceBadge">$ {price}</span>
                </div>
                <div className="card-footer d-flex justify-content-end">
                    <button type="button" className="btn btn-info">Click to Order</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;