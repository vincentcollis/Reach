import React, {Component} from 'react';
import {Button} from "primereact/button";

export default class NotFound extends Component {

	render() {
		return <div className="exception-body notfound-body">

			<div className="exception-container">
				<img src="assets/layout/images/logo-dark.png" alt="apollo-layout"/>
				<h1>Not Found</h1>
				<p>
					Resource is not found.
				</p>

				<Button label="Go To Dashboard" icon="pi pi-arrow-left" onClick={() => {window.location = "/#"}} />
			</div>
		</div>
	}
}