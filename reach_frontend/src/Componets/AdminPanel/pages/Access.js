import React, {Component} from 'react';
import {Button} from "primereact/button";

export default class Access extends Component {

	render() {
		return <div className="exception-body access-body">
			<div className="exception-container">
				<img src="assets/layout/images/logo-dark.png" alt="apollo-layout"/>
				<h1>Denied</h1>
				<p>
					You do not have the necessary privileges.
				</p>

				<Button label="Go To Dashboard" icon="pi pi-arrow-left" onClick={() => {window.location = "/#"}} />
			</div>
		</div>
	}
}