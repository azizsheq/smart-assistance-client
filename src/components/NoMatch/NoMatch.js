import React from 'react';
import './NoMatch.css'
import sad from '../../images/sad emoji.png'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const NoMatch = () => {
    let history = useHistory();

    function handleClickBackHome() {
        history.push("/home");
    }
    return (
        <div className="noMatchDiv">
            <h2>We are Sorry</h2>
            <img src={sad} alt="mem logo"/>
            <h1>ERROR : 404</h1>
            <h2>Page not found</h2>
            <p>The Page you are looking for dose not exists or an another error occurred</p>
            <Button onClick={handleClickBackHome}>Back to Home</Button>
        </div>
    );
};

export default NoMatch;