import React, {Component} from 'react';
import {Button} from "primereact/button";

export default class Error extends Component {

	render() {
		return <div className="exception-body error-body">
			<div className="exception-container">
				<img src="assets/layout/images/logo-dark.png" alt="apollo-layout" />
				<h1>Error</h1>
				<p>
					Please contact the system administrator.
				</p>

				<Button label="Go To Dashboard" icon="pi pi-arrow-left" onClick={() => {window.location = "/#"}} />
			</div>
		</div>
	}
}