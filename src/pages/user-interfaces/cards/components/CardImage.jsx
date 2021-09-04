import React, { Component } from 'react'
import Image from '../../../../assets/images/1.jpg'

export class CardImage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-12 mgt-15">
                    <h4 className="text-w-700 tcolor-black-2">Card Image</h4>
                </div>
                <div className="col-md-4 mgb-15">
                    <div className="card">
                        <img src={Image} className="card-image-top" alt="..." />
                        <div className='card-header'>
                            <div className="card-title">Card Image</div>
                        </div>
                        <div className='card-body'>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <button className="btn btn-primary">Go Somewhere</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mgb-15">
                    <div className="card">
                        <div className='card-header'>
                            <div className="card-title">Card Image</div>
                        </div>
                        <img src={Image} className="card-image-fluid" alt="..." />
                        <div className='card-body'>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <button className="btn btn-primary">Go Somewhere</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mgb-15">
                    <div className="card">
                        <div className='card-header'>
                            <div className="card-title">Card Image</div>
                        </div>
                        <div className='card-body'>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <img src={Image} className="card-image-fluid" style={{marginBottom: '1rem'}} alt="..." />
                            <button className="btn btn-primary">Go Somewhere</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CardImage
