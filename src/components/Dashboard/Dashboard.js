import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './Dashboard.css'
import Orders from './Orders/Orders';
import NavBar from '../Home/Header/NavBar/NavBar';
import DashboardMenu from './DashboardMenu/DashboardMenu';
import AddReview from './AddReview/AddReview';

const Dashboard = () => {
    return (
        <div className="container dashboardMainDiv">
            <NavBar/>
            <Router>
                <div className="row">
                    <div className="col-sm-3 dashNavDiv">
                        <DashboardMenu/>
                    </div>
                    <div className="col-sm-9 dashCompDiv">
                        <Switch>
                            <Route path="/dashboard/orders">
                                <Orders/>
                            </Route>
                            <Route path="/dashboard/addReviews">
                                <AddReview/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default Dashboard;