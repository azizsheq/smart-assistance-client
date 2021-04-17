import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Projects from './Projects/Projects';
import InquiryForm from './InquiryForm/InquiryForm';
import Services from './Services/Services';
import Reviews from './Reviews/Reviews';
const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <Projects/>
            <Reviews/>
            <InquiryForm/>
            <Footer/>
        </div>
    );
};

export default Home;