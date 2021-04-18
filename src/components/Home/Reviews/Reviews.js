import React from 'react';
import './Reviews.css'
import ReviewCard from './ReviewCard/ReviewCard';
import { useState } from 'react';
import { useEffect } from 'react';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5055/getReviews`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data)
            })       
    },[])
    return (
        <div className="container reviewDiv">
            <div className="reviewHeaderLabel">
                <h1>- REVIEWS -</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    reviews.map(review => <ReviewCard review={review} key={review._id}/>)
                }
            </div>
        </div>
    );
};

export default Reviews;