import React from 'react';
import './InquiryForm.css'

const InquiryForm = () => {
    const handleInquirySubmit = () => {
        alert("Thanks for contacting us !")
    }
    return (
        <section className="container inquirySection">
            <div className="inquiryFormLabel">
                <h4>We are here to listen </h4>
            </div>
            <form>
                <div className="mb-3">
                    <label for="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" required/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" required/>
                </div>
                <div className="mb-3">
                    <label for="inquiryDetails" className="form-label">Inquiry Details</label>
                    <input type="text" className="form-control" id="inquiryDetails" required/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="promotionCheckBox"/>
                    <label className="form-check-label" for="promotionCheckBox">Check to receive our promotions</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleInquirySubmit}>Submit</button>
            </form>
        </section>
    );
};

export default InquiryForm;