import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TabView, TabPanel } from 'primereact/tabview';

export class AppConfig extends Component {

	static defaultProps = {
		layoutMode: 'slim',
		themeColor: 'blue',
		darkTheme: true,
		configDialogActive: false
	}

	static propTypes = {
		layoutMode: PropTypes.string.isRequired,
		darkTheme: PropTypes.bool.isRequired,
		themeColor: PropTypes.string.isRequired,
		configDialogActive: PropTypes.bool.isRequired
	}

	constructor(props) {
		super(props);

		this.onChangeTheme = this.onChangeTheme.bind(this);
	}

	onChangeTheme(event, file) {
		let theme;
		if(this.props.darkTheme) {
			theme = file + '-dark';
		}
		else {
			theme = file + '-light';
		}
		this.props.changeTheme({
			originalEvent: event,
			theme: theme
		})
	}

	render() {
		let themeColors = [
			{name: 'Blue', file: 'blue', image: 'blue.svg'},
			{name: 'Green', file: 'green', image: 'green.svg'},
			{name: 'Cyan', file: 'cyan', image: 'cyan.svg'},
			{name: 'Purple', file: 'purple', image: 'purple.svg'},
			{name: 'Indigo', file: 'indigo', image: 'indigo.svg'},
			{name: 'Yellow', file: 'yellow', image: 'yellow.svg'},
			{name: 'Orange', file: 'orange', image: 'orange.svg'},
			{name: 'Pink', file: 'pink', image: 'pink.svg'}
		];

		return (
			<div className={classNames("layout-config", {'layout-config-active': this.props.configDialogActive})} onClick={this.props.onConfigClick}>
				<div className="layout-config-content">
					<button className="layout-config-button" id="layout-config-button" onClick={this.props.onConfigButtonClick}>
						<i className="pi pi-cog"/>
					</button>

					<button className="layout-config-close" onClick={this.props.onConfigCloseClick}>
						<i className="pi pi-times"/>
					</button>

					<TabView>
						<TabPanel header="Light or Dark">
							<div className="panel-items">
								<div className="panel-item">
									<button className="p-link" onClick={event => this.props.changeMenuColor({ originalEvent: event, darkTheme: false })}>
										<img src="assets/layout/images/configurator/menu/apollo-static.png" alt="apollo"/>
										{this.props.darkTheme === false && <i className="pi pi-check"/>}
									</button>
								</div>
								<div className="panel-item">
									<button className="p-link" onClick={event => this.props.changeMenuColor({ originalEvent: event, darkTheme: true })}>
										<img src="assets/layout/images/configurator/menu/apollo-dark.png" alt="apollo"/>
										{this.props.darkTheme === true && <i className="pi pi-check"/>}
									</button>
								</div>
							</div>
						</TabPanel>

						<TabPanel header="Menu" headerClassName="">
							<h1>Menu Modes</h1>
							<div className="panel-items">
								<div className="panel-item">
									<button className="p-link" onClick={event => this.props.changeMenuMode({ originalEvent: event, menuMode: 'static' })}>
										<img src="assets/layout/images/configurator/menu/apollo-static.png" alt="apollo"/>
										{this.props.layoutMode === 'static' && <i className="pi pi-check"/>}
									</button>
									<span>Static</span>
								</div>
								<div className="panel-item">
									<button className="p-link" onClick={event => this.props.changeMenuMode({ originalEvent: event, menuMode: 'overlay' })}>
										<img src="assets/layout/images/configurator/menu/apollo-overlay.png" alt="apollo"/>
										{this.props.layoutMode === 'overlay' && <i className="pi pi-check"/>}
									</button>
									<span>Overlay</span>
								</div>
								<div className="panel-item">
									<button className="p-link" onClick={event => this.props.changeMenuMode({ originalEvent: event, menuMode: 'horizontal' })}>
										<img src="assets/layout/images/configurator/menu/apollo-horizontal.png" alt="apollo"/>
										{this.props.layoutMode === 'horizontal' && <i className="pi pi-check"/>}
									</button>
									<span>Horizontal</span>
								</div>
								<div className="panel-item">
									<button className="p-link" onClick={event => this.props.changeMenuMode({ originalEvent: event, menuMode: 'slim' })}>
										<img src="assets/layout/images/configurator/menu/apollo-slim.png" alt="apollo"/>
										{this.props.layoutMode === 'slim' && <i className="pi pi-check"/>}
									</button>
									<span>Slim</span>
								</div>
							</div>
						</TabPanel>

						<TabPanel header="Themes">
							<div className="panel-items">
								{themeColors && themeColors.map((t, index) => {
									return <div className="panel-item colors" key={index}>
										<button className="p-link layout-config-option"
												onClick={event => this.onChangeTheme(event, t.file)}>
											<img src={"assets/layout/images/configurator/themes/" + t.image} alt={t.name}/>
											{this.props.themeColor === t.file && <i className="pi pi-check"/>}
										</button>
									</div>
								})
								}
							</div>
						</TabPanel>
					</TabView>
				</div>
			</div>
		);
	}
}
