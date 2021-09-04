import React, { Component } from 'react'

export class ButtonsOne extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-12">
                    <div className="card">
                        <div className='card-header'>
                            <div className="card-title">Button Basic</div>
                        </div>
                        <div className='card-body'>
                            <div className="card-text mgb-15">
                                Bootstrap includes nine predefined button styles, each serving its own semantic purpose. Use it with <code>.btn-*</code> classname.
                            </div>
                            <div className='full-width mgb-15'>
                                <button className="btn btn-primary mgr-10">Primary</button>
                                <button className="btn btn-secondary mgr-10">Secondary</button>
                                <button className="btn btn-success mgr-10">Success</button>
                                <button className="btn btn-danger mgr-10">Danger</button>
                                <button className="btn btn-warning mgr-10">Warning</button>
                                <button className="btn btn-info mgr-10">Info</button>
                                <button className="btn btn-light mgr-10">Light</button>
                                <button className="btn btn-dark mgr-10">Dark</button>
                                <button className="btn btn-link mgr-10">Link</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ButtonsOne
