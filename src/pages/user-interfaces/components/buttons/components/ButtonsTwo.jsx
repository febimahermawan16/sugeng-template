import React, { Component } from 'react'

export class ButtonsTwo extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-12 mgt-15">
                    <div className="card">
                        <div className='card-header'>
                            <div className="card-title">Button Outline</div>
                        </div>
                        <div className='card-body'>
                            <div className="card-text mgb-15">
                                Bootstrap includes eight predefined button outline styles, each serving its own semantic purpose.. Use it with <code>.btn-outline*</code> classname.
                            </div>
                            <div className='full-width mgb-15'>
                                <button className="btn btn-outline-primary mgr-10">Primary</button>
                                <button className="btn btn-outline-secondary mgr-10">Secondary</button>
                                <button className="btn btn-outline-success mgr-10">Success</button>
                                <button className="btn btn-outline-danger mgr-10">Danger</button>
                                <button className="btn btn-outline-warning mgr-10">Warning</button>
                                <button className="btn btn-outline-info mgr-10">Info</button>
                                <button className="btn btn-outline-light mgr-10">Light</button>
                                <button className="btn btn-outline-dark mgr-10">Dark</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ButtonsTwo
