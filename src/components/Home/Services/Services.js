import React, { useEffect, useState } from 'react';
import './Services.css'
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5055/getServices`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServices(data)
            })       
    },[])

    return (
        <div className="container">
            <div className="serviceHeaderLabel">
                <h1>- Our Services -</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                {
                    services.map(service => <ServiceCard service={service} key={service._id}/>)
                }
            </div>
        </div>
    );
};

export default Services;