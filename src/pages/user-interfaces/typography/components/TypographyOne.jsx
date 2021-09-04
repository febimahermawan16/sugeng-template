import React, { Component } from 'react'

export class TypographyOne extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-6">
                    <div className="card">
                        <div className='card-header'>
                            <div className="card-title">Heading Size</div>
                        </div>
                        <div className='card-body'>
                            <div className="card-text mgb-15">
                                All HTML headings, <code>{`<h1>`}</code> through <code>{`<h6>`}</code>, are available. <code>.h1</code> through <code>.h6</code> classes are also available, 
                                for when you want to match the font styling of a heading.
                            </div>
                            <div className="table-responsive scroll-semi-dark for-x scroll-thin">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="text-start" width="40%">Heading</th>
                                            <th className="text-start" width="40%">Heading Class</th>
                                            <th className="text-end" width="20%">Font Size</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h1>Heading 1</h1>
                                            </td>
                                            <td>
                                                <span className="h1 tcolor-black-3">Heading 1</span>
                                            </td>
                                            <td>
                                                <span className="pull-right tcolor-black-3">2 rem</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2>Heading 2</h2>
                                            </td>
                                            <td>
                                                <span className="h2 tcolor-black-3">Heading 2</span>
                                            </td>
                                            <td>
                                                <span className="pull-right tcolor-black-3">1.714rem</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h3>Heading 3</h3>
                                            </td>
                                            <td>
                                                <span className="h3 tcolor-black-3">Heading 3</span>
                                            </td>
                                            <td>
                                                <span className="pull-right tcolor-black-3">1.5rem</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h4>Heading 4</h4>
                                            </td>
                                            <td>
                                                <span className="h4 tcolor-black-3">Heading 4</span>
                                            </td>
                                            <td>
                                                <span className="pull-right tcolor-black-3">1.286rem</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Heading 5</h5>
                                            </td>
                                            <td>
                                                <span className="h5 tcolor-black-3">Heading 5</span>
                                            </td>
                                            <td>
                                                <span className="pull-right tcolor-black-3">1.07rem</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Heading 6</h6>
                                            </td>
                                            <td>
                                                <span className="h6 tcolor-black-3">Heading 6</span>
                                            </td>
                                            <td>
                                                <span className="pull-right tcolor-black-3">1rem</span>
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

export default TypographyOne
