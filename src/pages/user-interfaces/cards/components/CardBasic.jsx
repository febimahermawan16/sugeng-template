import React, { Component } from 'react'


export class CardBasic extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-12 mgt-15">
                    <h4 className="text-w-700 tcolor-black-2">Basic Card</h4>
                </div>
                <div className="col-md-4 mgb-15">
                    <div className="card">
                        <div className='card-header'>
                            <div className="card-title">Card Basic</div>
                        </div>
                        <div className='card-body'>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary">Go Somewhere</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mgb-15">
                    <div className="card">
                        <div className='card-header'>
                            <div className="card-title">Card Basic</div>
                        </div>
                        <div className='card-body'>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                        <div className="card-footer">
                            <a href="/">Go Somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mgb-15">
                    <div className="card">
                        <div className='card-header'>
                            <div className="card-title">Card Basic</div>
                            <span className="card-subtitle text-muted">Card Subtitle</span>
                        </div>
                        <div className='card-body'>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                        <div className="card-footer"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CardBasic
