import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AppBreadcrumb extends Component {

    static propTypes = {
        match: PropTypes.object
    }

    render() {
        const { location } = this.props;
        const paths = location.pathname.split('/');
        return (
            <div className="layout-breadcrumb">
                <ul>
                    <li><button className="p-link"><i className="pi pi-home"></i></button></li>
                    {
                        location.pathname === '/' ?  <li>/</li> : paths.map((path, index) => <li key={index}>{path === '' ? '/' : path}</li>)
                    }
                </ul>

                <div className="layout-breadcrumb-options">
                    <button className="p-link" title="Backup">
                        <i className="pi pi-cloud-upload"></i>
                    </button>
                    <button className="p-link" title="Bookmark">
                        <i className="pi pi-bookmark"></i>
                    </button>
                    <button className="p-link" title="Logout">
                        <i className="pi pi-power-off"></i>
                    </button>
                </div>
            </div>
        );
    }
}
