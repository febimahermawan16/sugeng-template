import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="app-footer tcolor-black-3">
                    <span>
                        2021 © Made with <i className="bx bxs-heart text-danger"></i> by <a href="https://github.com/febimahermawan16" target="_blank" rel="noreferrer">me</a>. 
                        All right reserved.</span>
                    <span className="pull-right">v1.0</span>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer
