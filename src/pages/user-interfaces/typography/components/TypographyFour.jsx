import React, { Component } from 'react'

export class TypographyFour extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-6 mgt-15">
                    <div className="card">
                        <div className='card-header'>
                            <div className="card-title">Display Headings</div>
                        </div>
                        <div className='card-body'>
                            <div className="card-text mgb-15">
                                Traditional heading elements are designed to work best in the meat of your page content. 
                                When you need a heading to stand out, consider using a <b>display heading</b>—a larger, slightly more opinionated heading style.
                            </div>
                            <div className="table-responsive scroll-semi-dark for-x scroll-thin">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="text-start" width="70%">Display</th>
                                            <th className="text-end" width="30%">Class Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h1 className="display-1">Text</h1>
                                            </td>
                                            <td>
                                                <span className="pull-right"><code>.display-1</code></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h1 className="display-2">Text</h1>
                                            </td>
                                            <td>
                                                <span className="pull-right"><code>.display-2</code></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h1 className="display-3">Text</h1>
                                            </td>
                                            <td>
                                                <span className="pull-right"><code>.display-3</code></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h1 className="display-4">Text</h1>
                                            </td>
                                            <td>
                                                <span className="pull-right"><code>.display-4</code></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h1 className="display-5">Text</h1>
                                            </td>
                                            <td>
                                                <span className="pull-right"><code>.display-5</code></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h1 className="display-6">Text</h1>
                                            </td>
                                            <td>
                                                <span className="pull-right"><code>.display-6</code></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TypographyFour
