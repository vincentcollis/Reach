import React, { Component } from 'react';


import {CarService} from '../service/CarService';
import {Panel} from 'primereact/components/panel/Panel';
import {Checkbox} from 'primereact/components/checkbox/Checkbox';
import {Button} from 'primereact/components/button/Button';
import {FullCalendar} from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export class Communications extends Component {

    constructor() {
        super();
        this.state = {
            tasks: [],
            city: null,
            selectedCar: null,
			fullcalendarOptions: {
                plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
				defaultDate: '2020-11-01',
				header: {
					left: 'prev,next today',
					center: 'title',
					right: 'month,agendaWeek,agendaDay'
				}
			},
            events: [
                {
                    "id": 1,
                    "title": "All Day Event",
                    "start": "2020-11-01"
                },
                {
                    "id": 2,
                    "title": "Long Event",
                    "start": "2020-11-07",
                    "end": "2020-11-10"
                },
                {
                    "id": 3,
                    "title": "Repeating Event",
                    "start": "2020-11-09T16:00:00"
                },
                {
                    "id": 4,
                    "title": "Repeating Event",
                    "start": "2020-11-16T16:00:00"
                },
                {
                    "id": 5,
                    "title": "Conference",
                    "start": "2020-11-11",
                    "end": "2020-11-13"
                },
                {
                    "id": 6,
                    "title": "Meeting",
                    "start": "2020-11-12T10:30:00",
                    "end": "2020-11-12T12:30:00"
                },
                {
                    "id": 7,
                    "title": "Lunch",
                    "start": "2020-11-12T12:00:00"
                },
                {
                    "id": 8,
                    "title": "Meeting",
                    "start": "2020-11-12T14:30:00"
                },
                {
                    "id": 9,
                    "title": "Happy Hour",
                    "start": "2020-11-12T17:30:00"
                },
                {
                    "id": 10,
                    "title": "Dinner",
                    "start": "2020-11-12T20:00:00"
                },
                {
                    "id": 11,
                    "title": "Birthday Party",
                    "start": "2020-11-13T07:00:00"
                },
                {
                    "id": 12,
                    "title": "Black Friday Sales",
                    "url": "http://google.com/",
                    "start": "2020-11-27"
                }
            ],
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Programmable Messaging Respondents',
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


        return (
            <div className="p-grid dashboard">
                {/* <===== Chat Widget =====> */}
                <div className="p-col-12 p-lg-8 chat">
                    <Panel header="Chat" className="no-pad">
                        <ul>
                            <li className="clearfix message-from">
                                <img alt="Contact 2" src="assets/layout/images/avatar/avatar2.png" />
                                <span>Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore.</span>
                            </li>
                            <li className="clearfix message-own">
                                <img alt="User" src="assets/layout/images/avatar/avatar.png" />
                                <span>Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage.</span>
                            </li>
                            <li className="clearfix message-from">
                                <img alt="Contact 2" src="assets/layout/images/avatar/avatar2.png" />
                                <span>Chillwave craft beer tote bag stumptown quinoa hashtag.</span>
                            </li>
                            <li className="clearfix message-own">
                                <img alt="User" src="assets/layout/images/avatar/avatar.png" />
                                <span>Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal.</span>
                            </li>
                            <li className="clearfix message-own">
                                <span>Sed ut perspiciatis unde omnis iste natus.</span>
                            </li>
                            <li className="clearfix message-from">
                                <img alt="Contact 2" src="assets/layout/images/avatar/avatar2.png" />
                                <span>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.</span>
                            </li>
                            <li className="clearfix message-own">
                                <img alt="User" src="assets/layout/images/avatar/avatar.png" />
                                <span>At vero eos et accusamus.</span>
                            </li>
                        </ul>
                        <div className="new-message">
                            <div className="message-attachment">
                                <i className="pi pi-paperclip"></i>
                            </div>
                            <div className="message-input">
                                <input type="text" placeholder="Write a message" className="p-inputtext" />
                            </div>
                        </div>
                    </Panel>
                </div>
                {/* <==== End =====> */}

                {/* <==== Task Widget =====> */}
                <div className="p-col-12 p-md-12 p-lg-4 task-list">
                    <Panel header="Todays Tasks" style={{minHeight: '200px'}}>
                        <ul>
                            <li>
                                <Checkbox value="task1" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task1')>-1?true:false}></Checkbox>
                                <span className="task-name">REACH New Voters</span>
                                <i className="pi pi-briefcase"></i>
                            </li>
                            <li>
                                <Checkbox value="task2" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task2')>-1?true:false}></Checkbox>
                                <span className="task-name">Reload funds</span>
                                <i className="pi pi-file"></i>
                            </li>
                            <li>
                                <Checkbox value="task3" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task3')>-1?true:false}></Checkbox>
                                <span className="task-name">Respond to Past Messages</span>
                                <i className="pi pi-comments"></i>
                            </li>
                            <li>
                                <Checkbox value="task4" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task4')>-1?true:false}></Checkbox>
                                <span className="task-name">Client Meeting</span>
                                <i className="pi pi-users"></i>
                            </li>
                            <li>
                                <Checkbox value="task6" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task7')>-1?true:false}></Checkbox>
                                <span className="task-name">Generate Charts</span>
                                <i className="pi pi-chart-bar"></i>
                            </li>
                            <li>
                                <Checkbox value="task6" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task8')>-1?true:false}></Checkbox>
                                <span className="task-name">Call Client</span>
                                <i className="pi pi-mobile"></i>
                            </li>
                        </ul>
                    </Panel>
                </div>
                {/* <==== End =====> */}


                {/* <==== Task Widget =====> */}
                <div className="p-col-12 p-md-8">
                    <Panel header="Calendar" style={{height: '100%'}}>
                        <FullCalendar events={this.state.events} options={this.state.fullcalendarOptions} />
                    </Panel>
                </div>
                {/* <==== End =====> */}
                
                <div className="p-col-12 p-lg-4">
                    <div className="card timeline p-fluid">
                        <div className="p-grid">
                            <div className="p-col-3">
                                <span className="event-time">just now</span>
                                <i className="pi pi-fw pi-map-marker" style={{color:'#3984b8'}}></i>
                            </div>
                            <div className="p-col-9">
                                <span className="event-owner" style={{color:'#3984b8'}}>Katherine May</span>
                                <span className="event-text">Lorem ipsun dolor amet</span>
                                <div className="event-content">
                                    <img alt="Bridge" src="assets/layout/images/dashboard/bridge.png" width="100"/>
                                </div>
                            </div>

                            <div className="p-col-3">
                                <span className="event-time">12h ago</span>
                                <i className="pi pi-fw pi-star" style={{color:'#f6ac2b'}}></i>
                            </div>
                            <div className="p-col-9">
                                <span className="event-owner" style={{color:'#f6ac2b'}}>Brandon Santos</span>
                                <span className="event-text">Ab nobis, magnam sunt eum. Laudantium, repudiandae, similique!.</span>
                            </div>

                            <div className="p-col-3">
                                <span className="event-time">15h ago</span>
                                <i className="pi pi-fw pi-comment" style={{color:'#7e8dcd'}}></i>
                            </div>
                            <div className="p-col-9">
                                <span className="event-owner" style={{color:'#7e8dcd'}}>Stephan Ward</span>
                                <span className="event-text">Omnis veniam quibusdam ratione est repellat qui nam quisquam ab mollitia dolores ullam voluptates, similique, dignissimos.</span>
                                <div className="event-content">
                                    <img alt="Nature" src="assets/demo/images/nature/nature1.jpg" width="100"/>
                                </div>
                            </div>

                            <div className="p-col-3">
                                <span className="event-time">2d ago</span>
                                <i className="pi pi-fw pi-globe" style={{color:'#e175a0'}}></i>
                            </div>
                            <div className="p-col-9">
                                <span className="event-owner" style={{color:'#e175a0'}}>Jason Smith</span>
                                <span className="event-text">Laudantium, repudiandae, similique!</span>
                                <div className="event-content">
                                    <img alt="Map" src="assets/layout/images/dashboard/map.png" />
                                </div>
                            </div>

                            <div className="p-col-3">
                                <span className="event-time">1w ago</span>
                                <i className="pi pi-fw pi-heart" style={{color:'#39b8b6'}}></i>
                            </div>
                            <div className="p-col-9">
                                <span className="event-owner">Kevin Cox</span>
                                <span className="event-text">Quibusdam ratione est repellat qui nam quisquam veniam quibusdam ratione.</span>
                            </div>

                            <div className="p-col-3">
                                <span className="event-time">2w ago</span>
                                <i className="pi pi-fw pi-compass" style={{color:'#3eb839'}}></i>
                            </div>
                            <div className="p-col-9">
                                <span className="event-owner" style={{color:'#3eb839'}}>Walter White</span>
                                <span className="event-text">I am the one who knocks!</span>
                            </div>

                            <div className="p-col-12">
                                <Button type="button" label="Refresh" icon="pi pi-refresh" className="rounded-btn raised-btn"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
