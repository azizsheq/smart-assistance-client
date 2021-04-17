import React from 'react';
import './Projects.css'
import robot from '../../../images/project-1.jpg';
import repair from '../../../images/project-2.jpg';
import disinfect from '../../../images/project-3.jpg';

const Projects = () => {
    return (
        <section className="projectMainSection">
            <div className="projectsHeader">
                <h1>- PROJECTS -</h1>
            </div>
            
            <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
                <div className="col">
                    <div className="card h-100">
                    <img src={robot} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Cleaner Robot</h5>
                        <p className="card-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolores neque, consequatur ducimus totam culpa distinctio, exercitationem eveniet praesentium id laudantium voluptatem assumenda iusto ea quaerat ab impedit soluta doloribus.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={repair} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Repair Works</h5>
                        <p className="card-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolores neque, consequatur ducimus totam culpa distinctio, exercitationem eveniet praesentium id laudantium voluptatem assumenda iusto ea quaerat ab impedit soluta doloribus.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={disinfect} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Disinfection</h5>
                        <p className="card-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolores neque, consequatur ducimus totam culpa distinctio, exercitationem eveniet praesentium id laudantium voluptatem assumenda iusto ea quaerat ab impedit soluta doloribus.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Projects;