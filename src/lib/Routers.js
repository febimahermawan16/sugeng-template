import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Default
import Sidebar from '../default/Sidebar';
import Footer from '../default/Footer';

// Pages
// Dashboard
import Dashboard from '../pages/dashboard/Dashboard';

// User Interfaces
// Typhography
import Typographys from '../pages/user-interfaces/typography/Typographys';

// Cards
import Cards from '../pages/user-interfaces/cards/Cards';

// Component
// Button
import Buttons from '../pages/user-interfaces/components/buttons/Buttons';

export class Routers extends Component {
    render() {
        return (
            <Router>
                <Switch>
                
                    {/* 
                    * ========== Main ===========
                    */}
                    {/* Dashboard */}
                    <Route exact path="/">
                        <Sidebar />
                        <div className="app-content">
                        <div className="content">
                            <div className="row">
                            <Dashboard />
                            </div>
                        </div>
                        <Footer />
                        </div>
                    </Route>

                    {/* Introduction */}


                    {/* Changelogs */}

                    {/* 
                    * ========== User Interfaces ===========
                    */}
                    {/* Typography */}
                    <Route path="/typography">
                        <Sidebar />
                        <div className="app-content">
                        <div className="content">
                            <div className="row">
                            <Typographys />
                            </div>
                        </div>
                        <Footer />
                        </div>
                    </Route>
                    
                    {/* Cards */}
                    <Route path="/cards">
                        <Sidebar />
                        <div className="app-content">
                        <div className="content">
                            <div className="row">
                            <Cards />
                            </div>
                        </div>
                        <Footer />
                        </div>
                    </Route>


                    {/* Components */}
                    {/* Accordion */}

                    {/* Alert */}

                    {/* Avatar */}

                    {/* Badges */}
                    
                    {/* Breadcrumb */}

                    {/* Buttons */}
                    <Route path="/components/buttons">
                        <Sidebar />
                        <div className="app-content">
                        <div className="content">
                            <div className="row">
                                <Buttons />
                            </div>
                        </div>
                        <Footer />
                        </div>
                    </Route>


                    {/* 
                    * ========== Forms & Tables ===========
                    */}
                    {/* Forms */}


                    {/* 
                    * ========== Charts ===========
                    */}
                    {/* Apex */}


                    {/* 
                    * ========== Pages ===========
                    */}
                    {/* Login */}
                </Switch>
            </Router>
        )
    }
}

export default Routers
