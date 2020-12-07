import React, { Component } from 'react';

import {CarService} from '../service/CarService';
import {Panel} from 'primereact/components/panel/Panel';

import {Chart} from 'primereact/chart';
import {ProgressBar} from 'primereact/progressbar';



export class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Programmable SMS Respondents',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#03A9F4'
                    },
                    {
                        label: 'Programmable Voice Respondents',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: '#FFC107'
                    }
                ]
            },
            pieData: {
                labels: ['Joe Biden Endorsment Campaign','NRA Negative Campaign','GOTV Campaign'],
                datasets: [
                    {
                        data: [250, 50, 500],
                        backgroundColor: [
                            "#FFC107",
                            "#03A9F4",
                            "#4CAF50"
                        ],
                        hoverBackgroundColor: [
                            "#FFE082",
                            "#81D4FA",
                            "#A5D6A7"
                        ]
                    }]
            },
            radarData: {
                labels: ['Medicare For All', 'Criminal Reform', 'Tax Reform', 'Affordable College', 'Green New Deal', 'Supreme Court', 'Pro-Life'],
                datasets: [
                    {
                        label: 'African Americans',
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: 'rgba(179,181,198,1)',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                        label: 'Hispanics',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        pointBackgroundColor: 'rgba(255,99,132,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                        data: [28, 48, 40, 19, 96, 27, 100]
                    },
                    {
                        label: 'Asians',
                        backgroundColor: 'rgba(132,226,229,0.2)',
                        borderColor: 'rgba(1,210,218,1)',
                        pointBackgroundColor: 'rgba(1,210,218,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                        data: [64, 100, 69, 9, 56, 63, 22]
                    }
                ]
            }
        };
        this.onTaskChange = this.onTaskChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.carservice = new CarService();
    }

    

    onTaskChange(e) {
        let selectedTasks = [...this.state.tasks];
        if(e.checked)
            selectedTasks.push(e.value);
        else
            selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

        this.setState({tasks: selectedTasks});
    }

    onCityChange(e) {
        this.setState({city: e.value});
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    

    render() {

        let cities = [
            {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
            {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
            {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
            {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
            {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
        ];

        let menuItems = [
            {
                label: 'Save', icon: 'pi pi-fw pi-check'
            },
            {
                label: 'Update', icon: 'pi pi-fw pi-refresh'
            },
            {
                label: 'Delete', icon: 'pi pi-fw pi-trash'
            }
        ];

        return (
            <div className="p-grid dashboard">
                {/* Top Page Counters */}
                <div className="p-col-12 p-md-3">
                    <div className="overview-box overview-box-1"><h1>SMS Sent</h1>
                        <div className="overview-value">25,620</div>
                        <div className="overview-ratio">
                            <div className="overview-direction">
                                <i className="pi pi-arrow-up" ></i>
                            </div>
                            <div className="overview-ratio-value">
                                51%
                            </div>
                        </div>
                        <img src="assets/layout/images/dashboard/graph-blue.svg" alt="apollo-layout"/>
                    </div>
                </div>

                <div className="p-col-12 p-md-3">
                    <div className="overview-box overview-box-2">
                        <h1>RESPONDANTS</h1>
                        <div className="overview-value">18,945</div>
                        <div className="overview-ratio">
                            <div className="overview-direction">
                                <i className="pi pi-arrow-up" ></i>
                            </div>
                            <div className="overview-ratio-value">
                                36%
                            </div>
                        </div>
                        <img src="assets/layout/images/dashboard/graph-green.svg" alt="apollo-layout"/>
                    </div>
                </div>

                <div className="p-col-12 p-md-3">
                    <div className="overview-box overview-box-3">
                        <h1>LINK CLICKS</h1>
                        <div className="overview-value">452</div>
                        <div className="overview-ratio">
                            <div className="overview-direction">
                                <i className="pi pi-arrow-up"></i>
                            </div>
                            <div className="overview-ratio-value">
                                19%
                            </div>
                        </div>
                        <img src="assets/layout/images/dashboard/graph-yellow.svg" alt="apollo-layout"/>
                    </div>
                </div>

                <div className="p-col-12 p-md-3">
                    <div className="overview-box overview-box-4">
                        <h1>DONATIONS</h1>
                        <div className="overview-value">$65,922</div>
                        <div className="overview-ratio">
                            <div className="overview-direction">
                                <i className="pi pi-arrow-up" ></i>
                            </div>
                            <div className="overview-ratio-value">
                                25%
                            </div>
                        </div>
                        <img src="assets/layout/images/dashboard/graph-red.svg" alt="apollo-layout"/>
                    </div>
                </div>

                {/* End of Top Page Counters */}

                {/* <====== Status Circle Graphs ======> */}

                <div className="p-col-12">
                    <Panel header="Daily Status" className="circle-panel">
                        <div className="p-grid">
                            <div className="p-col-12 p-lg-3 p-md-6">
                                <div className="status-title" style={{color:'#6ebc3b'}}>Respondants</div>
                                <div className="circle1">
                                    <i className="pi pi-user"></i>
                                    <span>75</span>
                                </div>
                            </div>
                            <div className="p-col-12 p-lg-3 p-md-6">
                                <div className="status-title" style={{color:'#f6a821'}}>Unsubscribes</div>
                                <div className="circle2">
                                    <i className="pi pi-mobile"></i>
                                    <span>25</span>
                                </div>
                            </div>
                            <div className="p-col-12 p-lg-3 p-md-6">
                                <div className="status-title" style={{color:'#039ade'}}>Link Clicks</div>
                                <div className="circle3">
                                    <i className="pi pi-eye"></i>
                                    <span>50</span>
                                </div>
                            </div>
                            <div className="p-col-12 p-lg-3 p-md-6">
                                <div className="status-title" style={{color:'#d66351'}}>Donation Goal</div>
                                <div className="circle4">
                                    <i className="pi pi-dollar"></i>
                                    <span>10</span>
                                </div>
                            </div>
                        </div>
                    </Panel>
                </div>

                {/* <======= End =======> */}

                {/* <======= Line Graph =======> */}
                <div className="p-col-12 p-md-6">
                    <Panel header="Respondants Per Message Type">
                        <Chart type="line" data={this.state.chartData}/>
                    </Panel>
                </div>
                {/* <======= End =======> */}

                {/* <======= Pie Graph =======> */}
                <div className="p-col-12 p-md-6">
                    <Panel header="Respondants Per Campaign">
                        <Chart type="pie" data={this.state.pieData} height="150"/>
                    </Panel>
                </div>
                {/* <======= End =======> */}

                {/* <======= Radar Chart =======> */}
                <div className="p-col-12 p-md-6">
                    <Panel header="Likely Hood to Respond">
                        <Chart type="radar" data={this.state.radarData} height="150"/>
                    </Panel>
                </div>
                {/* <======= End =======> */}

                {/* <======= Progress Bar =======> */}
                <div className="p-col-12 p-md-6">
                    <Panel header="Voter List REACH progress"  height="150">
                        <span> <strong>NYC-Bronx-District 15 </strong><em>42,406 / 56,541 Reached</em> </span>
                        <ProgressBar value={75} showValue={false}></ProgressBar>

                        <span> <strong>NYC-Manhatten-District 2 </strong> <em>62,981 / 125,963 Reached</em> </span>
                        <ProgressBar value={45} showValue={false}></ProgressBar>

                        <span> <strong>NJ-Bergen-District 6 </strong> <em>29,664 / 32,961 Reached</em> </span>
                        <ProgressBar value={85} showValue={false}></ProgressBar>

                        <span> <strong>NJ-Bergen-District 6 </strong> <em>29,664 / 32,961 Reached</em> </span>
                        <ProgressBar value={85} showValue={false}></ProgressBar>
                    </Panel>
                </div>
                {/* <======= End =======> */}

                

                

                


            </div>

        )
    }
}
