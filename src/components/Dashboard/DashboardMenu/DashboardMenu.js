import React from 'react';
import './DashboradMenu.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faEdit, faList, faPlus, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useState } from 'react';
import { useEffect } from 'react';

const DashboardMenu = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const url = `https://calm-river-92849.herokuapp.com/isAdmin`;
        fetch(url, {
            method: 'POST',
            headers: { 'content-type' : 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
    }, [])


    return (
        <div className="dashMenuDiv">
            <ul className="dashUL">

                <Link to="/dashboard/orders">
                    <li className="dashLI"><FontAwesomeIcon icon={faList}/>&nbsp;ORDERS</li>
                </Link>
                <Link to="/dashboard/addReviews">
                    <li className="dashLI"><FontAwesomeIcon icon={faCommentAlt}/>&nbsp;REVIEW</li>
                </Link>

                {isAdmin && <div>
                    <Link to="/dashboard/addServices">
                        <li className="dashLI"><FontAwesomeIcon icon={faPlus}/>&nbsp;ADD SERVICES</li>
                    </Link>
                    <Link to="/dashboard/manageUser">
                        <li className="dashLI"><FontAwesomeIcon icon={faUserCog}/>&nbsp;USER</li>
                    </Link>
                    <Link to="/dashboard/manageServices">
                        <li className="dashLI"><FontAwesomeIcon icon={faEdit}/>&nbsp;MANAGE SERVICES</li>
                    </Link>
                </div>}

            </ul>
        </div>
    );
};

export default DashboardMenu;