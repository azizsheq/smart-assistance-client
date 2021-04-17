import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';

const AddReview = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(loggedInUser);

    const [reviewData, setReviewData] = useState({
        image: loggedInUser.image
    });

    const setField = (field, value) => {
        setReviewData({
            ...reviewData,
            [field]: value
        })
    }

    const handleReviewSubmit = (e) => {
        console.log(reviewData);
        const url = `http://localhost:5055/addReview`;
        // fetch for sending new product data to server 
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        })
            .then(response => {
                // console.log("Server side response: ", response);
                if(response) {
                    alert('Review Uploaded Successfully !')
                } 
            })
            .catch(error => {
                console.error('Server side Error:', error);
            });
    }

    return (
        <div>
            <div class="mb-3">
                <label for="userName" class="form-label">Name</label>
                <input type="email" class="form-control" id="userName"
                    placeholder={loggedInUser.name}
                    onChange={e => setField('name', e.target.value)}
                    required />
            </div>

            <div class="mb-3">
                <label for="userEmail" class="form-label">Email address</label>
                <input type="email" class="form-control" id="userEmail" name="userEmail"
                    placeholder={loggedInUser.email}
                    onChange={e => setField('email', e.target.value)}
                    required />
            </div>

            <div class="mb-3">
                <label for="reviewText" class="form-label">Review / Comments</label>
                <textarea class="form-control" id="reviewText"
                    onChange={e => setField('reviewText', e.target.value)}
                    rows="3" required></textarea>
            </div>

            <button type="submit" class="btn btn-primary" onClick={handleReviewSubmit}>Submit</button>
        </div>
    );
};

export default AddReview;