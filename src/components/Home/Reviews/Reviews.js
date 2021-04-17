import React from 'react';
import './Reviews.css'
import client1 from '../../../images/client-1.jpg';
import client2 from '../../../images/client-2.jpg';
import client3 from '../../../images/client-3.jpg';
import client4 from '../../../images/client-4.jpg';
import ReviewCard from './ReviewCard/ReviewCard';

const reviewData = [
    {
        id : 1,
        name : "Rose",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image : client1
    },
    {
        id : 2,
        name : "Jack",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image : client2
    },
    {
        id : 3,
        name : "Eric",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image : client3
    },
    {
        id : 4,
        name : "Nairobi",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image : client4
    }
];

const Reviews = () => {
    return (
        <div className="container reviewDiv">
            <div className="reviewHeaderLabel">
                <h1>- REVIEWS -</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    reviewData.map(review => <ReviewCard review={review} key={review.id}/>)
                }
            </div>
        </div>
    );
};

export default Reviews;