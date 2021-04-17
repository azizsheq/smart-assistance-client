import React from 'react';
import './Services.css'
import ser1 from '../../../images/service-1.jpg';
import ser2 from '../../../images/service-2.jpg';
import ser3 from '../../../images/service-3.jpg';
import ServiceCard from './ServiceCard/ServiceCard';


const serviceData = [
    {
        id: 1,
        name: "Home Makeover",
        price: "499.99",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis minus eos dolorem.",
        image: ser1
    },
    {
        id: 2,
        name: "Disinfection Service",
        price: "199.99",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis minus eos dolorem.",
        image: ser2
    },
    {
        id: 3,
        name: "Smart Home Appliance",
        price: "999.99",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis minus eos dolorem.",
        image: ser3
    }
];

const Services = () => {
    return (
        <div className="container">
            <div className="serviceHeaderLabel">
                <h1>- Our Services -</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                {
                    serviceData.map(service => <ServiceCard service={service} key={service.id}/>)
                }
            </div>
        </div>
    );
};

export default Services;