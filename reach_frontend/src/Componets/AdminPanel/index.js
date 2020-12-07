import React, {Component} from 'react';
import { connect } from 'react-redux'


import classNames from 'classnames';

import {AppTopbar} from './AppTopbar';
import {AppBreadcrumb} from './AppBreadcrumb';
import {AppFooter} from './AppFooter';
import {AppMenu} from './AppMenu';
import {AppConfig} from './AppConfig';
import {Redirect, withRouter} from 'react-router';
import {Route} from 'react-router-dom';
import {Dashboard} from './components/Dashboard';

import {ProgressBar} from 'primereact/components/progressbar/ProgressBar';
import 'primereact/resources/primereact.min.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';
import { Communications } from './components/Communications';
import { Support } from './components/Support'

class Index extends Component {

    constructor() {
        super();
        this.state = {
            layoutMode: 'static',
            overlayMenuActive: false,
            staticMenuDesktopInactive: false,
            staticMenuMobileActive: false,
            topbarMenuActive: false,
            activeTopbarItem: null,
            darkTheme: false,
            menuActive: false,
            themeColor: 'blue',
            configDialogActive: false
        };

        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onMenuClick = this.onMenuClick.bind(this);
        this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
        this.onTopbarMenuButtonClick = this.onTopbarMenuButtonClick.bind(this);
        this.onThemeChange = this.onThemeChange.bind(this);
        this.onTopbarItemClick = this.onTopbarItemClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.onRootMenuItemClick = this.onRootMenuItemClick.bind(this);
        this.changeMenuMode = this.changeMenuMode.bind(this);
        this.changeMenuColor = this.changeMenuColor.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
        this.onConfigButtonClick = this.onConfigButtonClick.bind(this);
        this.onConfigCloseClick = this.onConfigCloseClick.bind(this);
        this.onConfigClick = this.onConfigClick.bind(this);
        this.createMenu();
    }

    onMenuClick(event) {
        this.menuClick = true;
    }

    onMenuButtonClick(event) {
        this.menuClick = true;
        this.setState(({
            topbarMenuActive: false
        }));

        if (this.state.layoutMode === 'overlay' && !this.isMobile()) {
            this.setState({
                overlayMenuActive: !this.state.overlayMenuActive
            });
        } else {
            if (this.isDesktop())
                this.setState({staticMenuDesktopInactive: !this.state.staticMenuDesktopInactive});
            else
                this.setState({staticMenuMobileActive: !this.state.staticMenuMobileActive});
        }

        event.preventDefault();
    }

    onTopbarMenuButtonClick(event) {
        this.topbarItemClick = true;
        this.setState({topbarMenuActive: !this.state.topbarMenuActive});
        this.hideOverlayMenu();
        event.preventDefault();
    }

    onTopbarItemClick(event) {
        this.topbarItemClick = true;

        if (this.state.activeTopbarItem === event.item)
            this.setState({activeTopbarItem: null});
        else
            this.setState({activeTopbarItem: event.item});

        event.originalEvent.preventDefault();
    }

    onMenuItemClick(event) {
        if (!event.item.items) {
            this.hideOverlayMenu();
        }
        if (!event.item.items && (this.isHorizontal() || this.isSlim())) {
            this.setState({
                menuActive: false
            })
        }
    }

    onRootMenuItemClick(event) {
        this.setState({
            menuActive: !this.state.menuActive
        });
    }

    onConfigButtonClick(event){
        this.configClick = true;
        this.setState({configDialogActive: !this.state.configDialogActive})
    }

    onConfigCloseClick(){
        this.setState({configDialogActive: false})
    }

    onConfigClick(){
        this.configClick = true;
    }

    onDocumentClick(event) {
        if (!this.topbarItemClick) {
            this.setState({
                activeTopbarItem: null,
                topbarMenuActive: false
            });
        }

        if (!this.configClick) {
            this.setState({configDialogActive: false});
        }

        if (!this.menuClick) {
            if (this.isHorizontal() || this.isSlim()) {
                this.setState({
                    menuActive: false
                })
            }

            this.hideOverlayMenu();
        }

        this.topbarItemClick = false;
        this.menuClick = false;
        this.configClick = false;
    }

    hideOverlayMenu() {
        this.setState({
            overlayMenuActive: false,
            staticMenuMobileActive: false
        })
    }

    isTablet() {
        let width = window.innerWidth;
        return width <= 1024 && width > 640;
    }

    isDesktop() {
        return window.innerWidth > 1024;
    }

    isMobile() {
        return window.innerWidth <= 640;
    }

    isOverlay() {
        return this.state.layoutMode === 'overlay';
    }

    isHorizontal() {
        return this.state.layoutMode === 'horizontal';
    }

    isSlim() {
        return this.state.layoutMode === 'slim';
    }

    changeMenuMode(event) {
        this.setState({
            layoutMode : event.menuMode,
            staticMenuDesktopInactive: false,
            overlayMenuActive: false
        });
    }

    changeMenuColor(event) {
        this.setState({darkTheme : event.darkTheme})
        this.onThemeChange();
    }

    onThemeChange() {
        const themeLink = document.getElementById('theme-css');
        const href = themeLink.href;
        const themeFile = href.substring(href.lastIndexOf('/') + 1, href.lastIndexOf('.'));
        const themeTokens = themeFile.split('-');
        const themeName = themeTokens[1];
        const themeMode = themeTokens[2];
        const newThemeMode = (themeMode === 'dark') ? 'light' : 'dark';

        this.changeTheme({originalEvent: null, theme:themeName + '-' + newThemeMode});
    }

    changeTheme(event) {
        this.setState({themeColor: event.theme.split('-')[0]})
        this.changeStyleSheetUrl('layout-css', event.theme, 'layout');
        this.changeStyleSheetUrl('theme-css', event.theme, 'theme');
    }

    changeStyleSheetUrl(id, value, prefix) {
        let element = document.getElementById(id);
        let urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = prefix + '-' + value + '.css';
        let newURL = urlTokens.join('/');

        this.replaceLink(element, newURL);

        if (value.indexOf('dark') !== -1) {
            this.setState({darkTheme: true});
        } else {
            this.setState({darkTheme: false});
        }
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent)
    }

    replaceLink(linkElement, href) {
        const id = linkElement.getAttribute('id');
        const cloneLinkElement = linkElement.cloneNode(true);

        if(this.isIE()){
            linkElement.setAttribute('href', href);
        }
        else {
            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    createMenu() {
        this.menu = [
            {label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard'},
            {label: 'Communications', icon: 'pi pi-fw pi-question', command: () => {window.location = "#/communications"}},  
            {label: 'Support', icon: 'pi pi-fw pi-question', command: () => {window.location = "#/support"}}
        ];
    }

    render() {

        
        const layoutClassName = classNames('layout-wrapper', {
            'layout-horizontal': this.state.layoutMode === 'horizontal',
            'layout-overlay': this.state.layoutMode === 'overlay',
            'layout-static': this.state.layoutMode === 'static',
            'layout-slim': this.state.layoutMode === 'slim',
            'layout-static-inactive': this.state.staticMenuDesktopInactive,
            'layout-mobile-active': this.state.staticMenuMobileActive,
            'layout-overlay-active': this.state.overlayMenuActive
        });
        const AppBreadCrumbWithRouter = withRouter(AppBreadcrumb);

        return (
            <div className={layoutClassName} onClick={this.onDocumentClick}>

                <AppTopbar darkTheme={this.state.darkTheme} onThemeChange={this.onThemeChange}
                           topbarMenuActive={this.state.topbarMenuActive} activeTopbarItem={this.state.activeTopbarItem}
                           onMenuButtonClick={this.onMenuButtonClick}
                           onTopbarMenuButtonClick={this.onTopbarMenuButtonClick}
                           onTopbarItemClick={this.onTopbarItemClick}/>

                <div className='layout-menu-container' onClick={this.onMenuClick}>
                    <div className="layout-menu-content">
                        <div className="layout-menu-title">MENU</div>
                        <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick}
                                 onRootMenuItemClick={this.onRootMenuItemClick}
                                 layoutMode={this.state.layoutMode} active={this.state.menuActive}/>
                        <div className="layout-menu-footer">
                            <div className="layout-menu-footer-title">TASKS PROGRESS</div>

                            <div className="layout-menu-footer-content">
                                <ProgressBar value={90} showValue={false}></ProgressBar>
                                Today
                                <ProgressBar value={35} showValue={false}></ProgressBar>
                                Week
                                <ProgressBar value={50} showValue={false}></ProgressBar>
                                Month
                                <ProgressBar value={43} showValue={false}></ProgressBar>
                                Quarter
                                <ProgressBar value={80} showValue={false}></ProgressBar>
                                Overall
                            </div>
                        </div>
                    </div>
                </div>

                <div className="layout-content">
                    <AppBreadCrumbWithRouter/>

                    <div className="layout-content-container">
                        
                        <Route path="/Communications" exact component={Communications}/>
                        <Route path="/Support" exact component={Support}/>
                        <Route path="/Dashboard" exact component={Dashboard}/>
                        <Route exact path = '/'>
                            <Redirect to='/Dashboard' />
                        </Route>
                    </div>

                    <AppFooter/>

                    {this.state.staticMenuMobileActive && <div className="layout-mask"></div>}
                </div>


                <AppConfig layoutMode={this.state.layoutMode} darkTheme={this.state.darkTheme} themeColor={this.state.themeColor}
                           changeMenuMode={this.changeMenuMode} changeMenuColor={this.changeMenuColor} changeTheme={this.changeTheme}
                           onConfigButtonClick={this.onConfigButtonClick} onConfigCloseClick={this.onConfigCloseClick}
                           onConfigClick={this.onConfigClick} configDialogActive={this.state.configDialogActive}/>
            </div>
        );
    }

    
}

const mapStateToProps = (state, voters) => ({
    voters: state.voters
  })

export default connect(mapStateToProps)(Index);
