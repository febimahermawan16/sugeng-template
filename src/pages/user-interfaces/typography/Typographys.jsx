import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TypographyOne from './components/TypographyOne'
import TypographyTwo from './components/TypographyTwo'
import TypographyThree from './components/TypographyThree'
import TypographyFour from './components/TypographyFour'
import TypographyFive from './components/TypographyFive'

export class Typographys extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-12 mgb-20">
                    <div className="card">
                        <div className='card-body pdv-10 pdh-15'>
                            <h5 className="df-fdr df-algn-ct text-w-700 no-margin devider-flex">
                                <span>Typography</span>
                                <span className="card-title-devider"></span>
                                <span className="text-r-p9 text-w-700 pdt-2">Route :</span>
                                <span>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            {/* <li className="breadcrumb-item" aria-current="page">Home</li> */}
                                            <li className="breadcrumb-item" aria-current="page"><Link to="/">Dashboard</Link></li>
                                            <li className="breadcrumb-item" aria-current="page"><Link to="/typography">User Interfaces</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Typography</li>
                                        </ol>
                                    </nav>
                                </span>
                            </h5>
                        </div>
                    </div>
                </div>
                <TypographyOne />
                <TypographyTwo />
                <TypographyThree />
                <TypographyFour />
                <TypographyFive />
            </React.Fragment>
        )
    }
}

export default Typographys
