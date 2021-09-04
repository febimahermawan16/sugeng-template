import React, { Component } from 'react'

export class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-12 mgb-20">
                    <div className="card">
                        <div className='card-body pdv-10 pdh-15'>
                            <h5 className="df-fdr df-algn-ct text-w-700 no-margin devider-flex">
                                <span>Dashboard</span>
                                <span className="card-title-devider"></span>
                                <span className="text-r-p9 text-w-700 pdt-2">Route :</span>
                                <span>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item" aria-current="page">Dashboard</li>
                                        </ol>
                                    </nav>
                                </span>
                            </h5>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Dashboard
