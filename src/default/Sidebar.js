import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FirstPage } from '@material-ui/icons'
import Logo from '../assets/images/logo.png'
import UserPict from '../assets/images/user.jpg'
import Header from './Header'

export class Sidebar extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <aside className="app-sidebar">
                    <div className="top-sidebar">
                        <div className="logo">
                            <Link to="/">
                                <img src={Logo} style={{maxWidth: '30px'}} alt="..." />
                            </Link>
                        </div>
                        <button className="toggle-sidebar">
                            <FirstPage />
                        </button>
                    </div>
                    <div className="sidebar-profile">
                        <div className="images-profile">
                            <img src={UserPict} alt="..." />
                        </div>
                        <span className="text-r-1 text-white">Aing Sugeng</span>
                        <span className="text-r-p7 tcolor-white-4">I'm Fullstack Developer</span>
                    </div>
                    <div className="container-sidebar scroll-y scroll-light for-y scroll-thin">
                        <div className="content-sidebar use-border-bottom">
                            <ul>
                                <li className="sidebar-title">Main</li>
                                <li className="sidebar-subtitle">Main Dashboard Preview</li>
                                <li className="sidebar-list">
                                    <Link to="/" className="list-content active">
                                        <span className="iicon">
                                            <i className="bx bx-customize"></i>
                                        </span>
                                        <span className="idescription use-icon">Dashboard</span>
                                    </Link>
                                </li>
                                <li className="sidebar-list">
                                    <Link to="/" className="list-content">
                                        <span className="iicon">
                                            <i className="bx bx-smile"></i>
                                        </span>
                                        <span className="idescription use-icon">Introduction</span>
                                    </Link>
                                </li>
                                {/* <li className="sidebar-list">
                                    <Link to="/" className="list-content">
                                        <span className="iicon">
                                            <i className="bx bx-code-curly"></i>
                                        </span>
                                        <span className="idescription use-icon">Changelogs <span className="badge bg-danger mgl-5">New</span></span>
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                        <div className="content-sidebar use-border-bottom">
                            <ul>
                                <li className="sidebar-title">User Interfaces</li>
                                <li className="sidebar-subtitle">Application Component Features</li>
                                <li className="sidebar-list">
                                    <Link to="/typography" className="list-content">
                                        <span className="iicon">
                                            <i className="bx bx-text"></i>
                                        </span>
                                        <span className="idescription use-icon">Typography</span>
                                    </Link>
                                </li>
                                <li className="sidebar-list">
                                    <Link to="/cards" className="list-content">
                                        <span className="iicon">
                                            <i className="bx bx-credit-card-front"></i>
                                        </span>
                                        <span className="idescription use-icon">Cards</span>
                                    </Link>
                                </li>
                                <li className="sidebar-list">
                                    <span className="list-content">
                                        <span className="iicon">
                                            <i className="bx bx-ghost"></i>
                                        </span>
                                        <span className="idescription use-all">Icons</span>
                                        <span className="iarrow">
                                            <i className="bx bx-chevron-left"></i>
                                        </span>
                                    </span>
                                    <ul className="child-two">
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-bug"></i>
                                                </span>
                                                <span className="idescription use-icon">Material Icons</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-bug"></i>
                                                </span>
                                                <span className="idescription use-icon">Boxicon</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-list">
                                    <span className="list-content">
                                        <span className="iicon">
                                            <i className="bx bx-palette"></i>
                                        </span>
                                        <span className="idescription use-all">Components</span>
                                        <span className="iarrow">
                                            <i className="bx bx-chevron-left"></i>
                                        </span>
                                    </span>
                                    <ul className="child-two">
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Accordion</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Alerts</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Avatar</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Badges</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Breadcrumb</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <Link to="/components/buttons" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Buttons</span>
                                            </Link>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Carousel</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Collapse</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Devider</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Dropdowns</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">List Group</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Modals</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Navs Component</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Offcanvas</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Pagination</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Pill Badges</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Pills Component</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Popovers</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Progress</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Spinner</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Tabs Component</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Timeline</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Toast</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-loader-circle"></i>
                                                </span>
                                                <span className="idescription use-icon">Tooltip</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="content-sidebar use-border-bottom">
                            <ul>
                                <li className="sidebar-title">Form &amp; Tables</li>
                                <li className="sidebar-subtitle">Building Your Own Form Schema</li>
                                <li className="sidebar-list sidebar-treeview active">
                                    <span className="list-content">
                                        <span className="iicon">
                                            <i className="bx bx-palette"></i>
                                        </span>
                                        <span className="idescription use-all">Form Elements</span>
                                        <span className="iarrow">
                                            <i className="bx bx-chevron-left"></i>
                                        </span>
                                    </span>
                                    <ul className="treeview-child child-two">
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-bookmark"></i>
                                                </span>
                                                <span className="idescription use-icon">Input</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-bookmark"></i>
                                                </span>
                                                <span className="idescription use-icon">Input Group</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-bookmark"></i>
                                                </span>
                                                <span className="idescription use-icon">Input Mask</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-bookmark"></i>
                                                </span>
                                                <span className="idescription use-icon">Textarea</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-bookmark"></i>
                                                </span>
                                                <span className="idescription use-icon">Checkbox</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-bookmark"></i>
                                                </span>
                                                <span className="idescription use-icon">Radio</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-bookmark"></i>
                                                </span>
                                                <span className="idescription use-icon">Switch</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-bookmark"></i>
                                                </span>
                                                <span className="idescription use-icon">Select</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-bookmark"></i>
                                                </span>
                                                <span className="idescription use-icon">Number Input</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-bookmark"></i>
                                                </span>
                                                <span className="idescription use-icon">File Uploader</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-bookmark"></i>
                                                </span>
                                                <span className="idescription use-icon">Text Editor</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-list">
                                            <a href="/" className="list-content">
                                                <span className="iicon">
                                                    <i className="bx bx-bookmark"></i>
                                                </span>
                                                <span className="idescription use-icon">Date &amp; Time Pickers</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-list">
                                    <a href="/" className="list-content">
                                        <span className="iicon">
                                            <i className="bx bx-grid-alt"></i>
                                        </span>
                                        <span className="idescription use-icon">Table</span>
                                    </a>
                                </li>
                                <li className="sidebar-list">
                                    <a href="/" className="list-content">
                                        <span className="iicon">
                                            <i className="bx bx-grid-alt"></i>
                                        </span>
                                        <span className="idescription use-icon">Datatable</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="content-sidebar use-border-bottom">
                            <ul>
                                <li className="sidebar-title">Charts</li>
                                <li className="sidebar-subtitle">Informative Chart For Your Application</li>
                                <li className="sidebar-list">
                                    <a href="/" className="list-content">
                                        <span className="iicon">
                                            <i className="bx bx-line-chart"></i>
                                        </span>
                                        <span className="idescription use-icon">Apex Chart</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="content-sidebar use-border-bottom">
                            <ul>
                                <li className="sidebar-title">Pages</li>
                                <li className="sidebar-subtitle">Pages Feature, Maybe You Need This</li>
                                <li className="sidebar-list">
                                    <a href="/" className="list-content">
                                        <span className="iicon">
                                            <i className="bx bx-layer"></i>
                                        </span>
                                        <span className="idescription use-icon">Account Settings</span>
                                    </a>
                                </li>
                                <li className="sidebar-list">
                                    <a href="/" className="list-content">
                                        <span className="iicon">
                                            <i className="bx bx-layer"></i>
                                        </span>
                                        <span className="idescription use-icon">Profile</span>
                                    </a>
                                </li>
                                <li className="sidebar-list">
                                    <a href="/" className="list-content">
                                        <span className="iicon">
                                            <i className="bx bx-lock-open-alt"></i>
                                        </span>
                                        <span className="idescription use-icon">Login</span>
                                    </a>
                                </li>
                                <li className="sidebar-list">
                                    <a href="/" className="list-content">
                                        <span className="iicon">
                                            <i className="bx bx-lock-open-alt"></i>
                                        </span>
                                        <span className="idescription use-icon">Register</span>
                                    </a>
                                </li>
                                <li className="sidebar-list">
                                    <a href="/" className="list-content">
                                        <span className="iicon">
                                            <i className="bx bx-lock-open-alt"></i>
                                        </span>
                                        <span className="idescription use-icon">Forgot Password</span>
                                    </a>
                                </li>
                                <li className="sidebar-list">
                                    <a href="/" className="list-content">
                                        <span className="iicon">
                                            <i className="bx bx-lock-open-alt"></i>
                                        </span>
                                        <span className="idescription use-icon">Reset Password</span>
                                    </a>
                                </li>
                                <li className="sidebar-list">
                                    <a href="/" className="list-content">
                                        <span className="iicon">
                                            <i className="bx bx-lock-open-alt"></i>
                                        </span>
                                        <span className="idescription use-icon">Verification Email</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </React.Fragment>
        )
    }
}

export default Sidebar
