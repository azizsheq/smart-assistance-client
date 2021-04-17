import React from 'react';
import './ReviewCard.css'

const ReviewCard = ({review}) => {
    const {name, text, image} = review;
    return (
        <div className="col text-center">
            <div className="card h-70">
                <div className="text-center">
                    <img src={image} className="card-img-top img-thumbnail reviewImage" alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">"{text}"</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;