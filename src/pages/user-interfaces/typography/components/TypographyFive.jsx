import React, { Component } from 'react'

export class TypographyFive extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-6 mgt-15">
                    <div className="card">
                        <div className='card-header'>
                            <div className="card-title">Text Component</div>
                        </div>
                        <div className='card-body'>
                            <div className="card-text mgb-15">
                                In this theme i'm not really re-create component style, for some component i leave the current style. So this is component for your font/text in this stylesheet.
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-text text-w-700 mgb-10">Bootstrap Font Color</div>
                                    <div className="full-width df-fdr pdh-15">
                                        <div className="row">
                                            <div className="col-md-4 mgb-5">
                                                <span className="text-primary">.text-primary</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="text-secondary">.text-secondary</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="text-success">.text-success</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="text-danger">.text-danger</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="text-warning">.text-warning</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="text-info">.text-info</span>
                                            </div>
                                            <div className="col-md-4 mgb-5 bg-dark">
                                                <span className="text-light">.text-light</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="text-dark">.text-dark</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="text-muted">.text-muted</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mgt-15">
                                <div className="card-body">
                                    <div className="card-text text-w-700 mgb-10">Font Color</div>
                                    <span className="full-width df-fdr pdh-15">
                                        <div className="row">
                                            <div className="col-md-4 mgb-5 bg-dark">
                                                <span className="tcolor-white">.tcolor-white</span>
                                            </div>
                                            <div className="col-md-4 mgb-5 bg-dark">
                                                <span className="tcolor-white-2">.tcolor-white-2</span>
                                            </div>
                                            <div className="col-md-4 mgb-5 bg-dark">
                                                <span className="tcolor-white-3">.tcolor-white-3</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="tcolor-black">.tcolor-black</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="tcolor-black-2">.tcolor-black-2</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="tcolor-black-3">.tcolor-black-3</span>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div className="card mgt-15">
                                <div className="card-body">
                                    <div className="card-text text-w-700 mgb-10">Bootstrap Text Element</div>
                                    <span className="full-width df-fdr pdh-15">
                                        <div className="row">
                                            <div className="col-md-12 mgb-5">
                                                <span>This is <span className="lead">text</span> with <code>.lead</code> Class</span>
                                            </div>
                                            <div className="col-md-12 mgb-5">
                                                <span>This is <mark>text</mark> with <code>{`<mark></mark>`}</code> Tag</span>
                                            </div>
                                            <div className="col-md-12 mgb-5">
                                                <span>This is <del>text</del> with <code>{`<del></del>`}</code> Tag</span>
                                            </div>
                                            <div className="col-md-12 mgb-5">
                                                <span>This is <s>text</s> with <code>{`<s></s>`}</code> Tag</span>
                                            </div>
                                            <div className="col-md-12 mgb-5">
                                                <span>This is <ins>text</ins> with <code>{`<ins></ins>`}</code> Tag</span>
                                            </div>
                                            <div className="col-md-12 mgb-5">
                                                <span>This is <u>text</u> with <code>{`<u></u>`}</code> Tag</span>
                                            </div>
                                            <div className="col-md-12 mgb-5">
                                                <span>This is <small>text</small> with <code>{`<small></small>`}</code> Tag</span>
                                            </div>
                                            <div className="col-md-12 mgb-5">
                                                <span>This is <strong>text</strong> with <code>{`<strong></strong>`}</code> Tag</span>
                                            </div>
                                            <div className="col-md-12 mgb-5">
                                                <span>This is <em>text</em> with <code>{`<em></em>`}</code> Tag</span>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TypographyFive
