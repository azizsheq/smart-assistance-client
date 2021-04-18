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
import AddServices from './AddServices/AddServices';
import ManageUser from './ManageUser/ManageUser';
import ManageServices from './ManageServices/ManageServices';
import ProcessOrder from './Orders/ProcessOrder/ProcessOrder';
import Payment from './Orders/Payment/Payment';

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
                            <Route path="/dashboard/processOrder/:id">
                                <ProcessOrder/>
                            </Route>
                            <Route path="/dashboard/payment">
                                <Payment/>
                            </Route>
                            <Route path="/dashboard/addReviews">
                                <AddReview/>
                            </Route>

                            <Route path="/dashboard/addServices">
                                <AddServices/>
                            </Route>
                            <Route path="/dashboard/manageUser">
                                <ManageUser/>
                            </Route>
                            <Route path="/dashboard/manageServices">
                                <ManageServices/>
                            </Route>
                            
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default Dashboard;