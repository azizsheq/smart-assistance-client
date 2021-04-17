import React from 'react';
import './DashboradMenu.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faEdit, faList, faPlus, faUserCog } from "@fortawesome/free-solid-svg-icons";

const DashboardMenu = () => {
    return (
        <div className="dashMenuDiv">
            <ul className="dashUL">
                <Link to="/dashboard/orders">
                    <li className="dashLI"><FontAwesomeIcon icon={faList}/>&nbsp;ORDERS</li>
                </Link>
                <Link to="/dashboard/addReviews">
                    <li className="dashLI"><FontAwesomeIcon icon={faCommentAlt}/>&nbsp;REVIEW</li>
                </Link>
                <Link to="">
                    <li className="dashLI"><FontAwesomeIcon icon={faPlus}/>&nbsp;ADD SERVICES</li>
                </Link>
                <Link to="">
                    <li className="dashLI"><FontAwesomeIcon icon={faUserCog}/>&nbsp;USER</li>
                </Link>
                <Link to="">
                    <li className="dashLI"><FontAwesomeIcon icon={faEdit}/>&nbsp;MANAGE SERVICES</li>
                </Link>
            </ul>
        </div>
    );
};

export default DashboardMenu;