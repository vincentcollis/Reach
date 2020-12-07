import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {InputText} from 'primereact/inputtext';
// import {InputSwitch} from 'primereact/inputswitch';

export class AppTopbar extends Component {

    static defaultProps = {
        onMenuButtonClick: null,
        onTopbarMenuButtonClick: null,
        onTopbarItemClick: null,
        topbarMenuActive: false,
        activeTopbarItem: null,
        darkTheme: null,
        onThemeChange: null
    }

    static propTypes = {
        onMenuButtonClick: PropTypes.func.isRequired,
        onTopbarMenuButtonClick: PropTypes.func.isRequired,
        onTopbarItemClick: PropTypes.func.isRequired,
        topbarMenuActive: PropTypes.bool.isRequired,
        activeTopbarItem: PropTypes.string,
        darkTheme: PropTypes.bool,
        onThemeChange: PropTypes.func
    }

    constructor() {
        super();
        this.state = {};
    }

    onTopbarItemClick(event, item) {
        if(this.props.onTopbarItemClick) {
            this.props.onTopbarItemClick({
                originalEvent: event,
                item: item
            });
        }
    }

    render() {
        let topbarItemsClassName = classNames('topbar-menu fadeInDown', {'topbar-menu-visible': this.props.topbarMenuActive});

        return <div className="topbar clearfix">

            <button className="p-link" id="menu-button" onClick={this.props.onMenuButtonClick}>
                <i className="pi pi-bars"></i>
            </button>

            {/* Insert Logo Here */}
            <span style={{fontSize: '28px', fontWeight: '700', letterSpacing: '2px'}}>REACH</span>
            {/* <img className="logo" alt="apollo-layout" src="assets/layout/images/apollo_logo.png" /> */}

            <button className="p-link profile" onClick={this.props.onTopbarMenuButtonClick}>
                <span className="username">Vincent Collis</span>
                <img src="assets/layout/images/avatar/avatar.png" alt="apollo-layout" />
                <i className="pi pi-angle-down"></i>
            </button>

            <span className="topbar-search">
                <InputText placeholder="Search"/>
                <span className="pi pi-search"></span>
            </span>

            {/* Theme Switcher */}
            {/* <span className="topbar-themeswitcher">
                <InputSwitch checked={this.props.darkTheme} onChange={this.props.onThemeChange}></InputSwitch>
            </span> */}

            <ul className={topbarItemsClassName}>
                <li className={classNames({'menuitem-active': this.props.activeTopbarItem === 'profile'})}
                    onClick={(e) => this.onTopbarItemClick(e, 'profile')}>
                    <button className="p-link">
                        <i className="topbar-icon pi pi-fw pi-user"></i>
                        <span className="topbar-item-name">Profile</span>
                    </button>

                    <ul>
                        <li role="menuitem">
                            <button className="p-link">
                                <i className="pi pi-fw pi-user-edit"></i>
                                <span>Account</span>
                            </button>
                        </li>
                        <li role="menuitem">
                            <button className="p-link">
                                <i className="pi pi-fw pi-eye"></i>
                                <span>Privacy</span>
                            </button>
                        </li>
                        <li role="menuitem">
                            <button className="p-link">
                                <i className="pi pi-fw pi-cog"></i>
                                <span>Settings</span>
                            </button>
                        </li>
                        <li role="menuitem">
                            <button className="p-link">
                                <i className="pi pi-fw pi-power-off"></i>
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </li>

                <li className={classNames({'menuitem-active': this.props.activeTopbarItem === 'settings'})}
                    onClick={(e) => this.onTopbarItemClick(e, 'settings')}>
                    <button className="p-link">
                        <i className="topbar-icon pi pi-fw pi-cog"></i>
                        <span className="topbar-item-name">Settings</span>
                    </button>
                    <ul>
                        <li role="menuitem">
                            <button className="p-link">
                                <i className="pi pi-fw pi-palette"></i>
                                <span>Change Theme</span>
                                <span className="topbar-badge">1</span>
                            </button>
                        </li>
                        <li role="menuitem">
                            <button className="p-link">
                                <i className="pi pi-fw pi-bookmark"></i>
                                <span>Favorites</span>
                            </button>
                        </li>
                        <li role="menuitem">
                            <button className="p-link">
                                <i className="pi pi-fw pi-lock"></i>
                                <span>Lock Screen</span>
                                <span className="topbar-badge">3</span>
                            </button>
                        </li>
                        <li role="menuitem">
                            <button className="p-link">
                                <i className="pi pi-fw pi-image"></i>
                                <span>Wallpaper</span>
                            </button>
                        </li>
                    </ul>
                </li>
                <li className={classNames({'menuitem-active': this.props.activeTopbarItem === 'messages'})}
                    onClick={(e) => this.onTopbarItemClick(e, 'messages')}>
                    <button className="p-link">
                        <i className="topbar-icon pi pi-fw pi-envelope"></i>
                        <span className="topbar-item-name">Messages</span>
                        <span className="topbar-badge">5</span>
                    </button>
                    <ul>
                        <li role="menuitem">
                            <button className="p-link topbar-message">
                                <img alt="Avatar 1" src="assets/layout/images/avatar/avatar1.png" width="35"/>
                                <span>Give me a call</span>
                            </button>
                        </li>
                        <li role="menuitem">
                            <button className="p-link topbar-message">
                                <img alt="Avatar 2" src="assets/layout/images/avatar/avatar2.png" width="35"/>
                                <span>Sales reports attached</span>
                            </button>
                        </li>
                        <li role="menuitem">
                            <button className="p-link topbar-message">
                                <img alt="Avatar 3" src="assets/layout/images/avatar/avatar3.png" width="35"/>
                                <span>About your invoice</span>
                            </button>
                        </li>
                        <li role="menuitem">
                            <button className="p-link topbar-message">
                                <img alt="Avatar 4" src="assets/layout/images/avatar/avatar2.png" width="35"/>
                                <span>Meeting today at 10pm</span>
                            </button>
                        </li>
                        <li role="menuitem">
                            <button className="p-link topbar-message">
                                <img alt="Avatar 5" src="assets/layout/images/avatar/avatar4.png" width="35"/>
                                <span>Out of office</span>
                            </button>
                        </li>
                    </ul>
                </li>
                <li className={classNames({'menuitem-active': this.props.activeTopbarItem === 'notifications'})}
                    onClick={(e) => this.onTopbarItemClick(e, 'notifications')}>
                    <button className="p-link">
                        <i className="topbar-icon pi pi-fw pi-bell"></i>
                        <span className="topbar-item-name">Notifications</span>
                        <span className="topbar-badge">2</span>
                    </button>
                    <ul>
                        <li role="menuitem">
                            <button className="p-link">
                                <i className="pi pi-fw pi-list"></i>
                                <span>Pending tasks</span>
                            </button>
                        </li>
                        <li role="menuitem">
                            <button className="p-link">
                                <i className="pi pi-fw pi-calendar"></i>
                                <span>Meeting today</span>
                            </button>
                        </li>
                        <li role="menuitem">
                            <button className="p-link">
                                <i className="pi pi-fw pi-download"></i>
                                <span>Download documents</span>
                            </button>
                        </li>
                        <li role="menuitem">
                            <button className="p-link">
                                <i className="pi pi-fw pi-ticket"></i>
                                <span>Book flight</span>
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>;
    }
}
