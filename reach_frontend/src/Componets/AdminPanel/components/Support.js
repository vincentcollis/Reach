import React, { Component } from 'react';
import { connect } from 'react-redux'



import {CarService} from '../service/CarService';
import {Panel} from 'primereact/components/panel/Panel';
import {Checkbox} from 'primereact/components/checkbox/Checkbox';
import {Button} from 'primereact/components/button/Button';
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import {InputText} from 'primereact/components/inputtext/InputText';
import {InputTextarea} from 'primereact/components/inputtextarea/InputTextarea';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {Chart} from 'primereact/chart';
import {ProgressBar} from 'primereact/progressbar';
import {Menu} from 'primereact/menu';
import {FullCalendar} from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export class Support extends Component {

    constructor() {
        super();
        this.state = {
            
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
                <h1>Lorem ipsum</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lobortis est, eu elementum quam. Etiam quis sagittis sapien. Nam eget venenatis sem, sed congue risus. Nam quis hendrerit tellus, in placerat nulla. Nam purus ex, commodo et lacinia sit amet, mollis eget purus. Donec auctor augue quis felis blandit, vulputate lobortis lectus elementum. Morbi sodales et metus aliquet fermentum. Cras venenatis, ante ac posuere auctor, nibh metus hendrerit sapien, sed sodales quam urna non nibh. Aliquam sed tortor sed dolor dictum placerat. Aenean placerat eget metus malesuada mollis. Maecenas sapien ante, consequat non porttitor sed, viverra ac dolor.
                </p><br></br>

                <h1>Aenean non luctus</h1>
                <p>
                    Aenean non luctus erat, sed cursus neque. Proin rhoncus tortor magna, at pulvinar sapien malesuada a. Nullam quis tincidunt nibh. Etiam id justo dolor. Duis at ipsum condimentum mi cursus elementum. Donec suscipit velit nec quam aliquet euismod. Ut vitae urna bibendum, porttitor felis a, tristique erat. Nam sodales quam turpis, sodales dictum dui efficitur et. Ut eget luctus arcu. Praesent at faucibus augue. Mauris id turpis ut mauris aliquam viverra vel scelerisque tellus. Vestibulum ligula elit, euismod ut lorem eget, imperdiet molestie erat. Curabitur quis ligula rhoncus, vestibulum dolor in, molestie justo. Vivamus sollicitudin, sapien quis finibus mattis, libero felis ultrices neque, id ultrices neque massa et eros.    
                </p><br></br>

                <h1>Duis blandit</h1>
                <p>
                    Duis blandit est sit amet convallis posuere. Vestibulum sed ornare neque, eget maximus sem. Curabitur congue commodo diam, finibus suscipit erat. Cras blandit diam in gravida eleifend. Nam lobortis diam vitae felis tempor, sed pulvinar massa pharetra. Nullam sed dictum mi, quis mattis ante. Nunc vitae arcu tempor, suscipit lacus id, bibendum enim. Nam felis erat, congue gravida tincidunt a, finibus ac sem. Nullam euismod lobortis turpis. Cras luctus sapien eget quam auctor, ac mollis nisi placerat. Etiam in massa non est rhoncus maximus. Praesent vestibulum vestibulum risus. Nam at finibus sem, non blandit nulla. In eleifend erat erat, a viverra ipsum pharetra in. Duis sed euismod eros. Nam in velit vitae nunc sodales finibus.    
                </p><br></br>

                <h1>Quisque sit</h1>
                <p>
                    Quisque sit amet orci feugiat, iaculis mauris viverra, egestas erat. Mauris at lectus et nulla lacinia porta vel ac neque. Vestibulum non augue vehicula, dignissim mauris a, dictum sapien. Nullam eget ante erat. Nullam sed diam a nulla suscipit feugiat vel ac nisi. Pellentesque blandit erat eu nisl volutpat, ut sagittis enim sollicitudin. Vivamus ac est a orci hendrerit tincidunt. Suspendisse lobortis arcu quam, eget fringilla dui tincidunt in. Fusce elit ex, mollis nec neque id, ornare condimentum orci. Morbi lobortis lectus urna, vitae aliquet turpis ultricies id. Maecenas eu ante congue, tempor quam sed, consequat magna.
                </p><br></br>

                <h1>Mauris finibus</h1>
                <p>
                    Mauris finibus mollis magna, in venenatis nisi. Pellentesque aliquet mollis consequat. Morbi aliquam ornare ipsum ac fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed molestie ultrices lacus. Sed posuere, leo ut sodales semper, mauris mauris sagittis dui, ut blandit leo mauris vel tellus.
                </p><br></br>

                <h1>Praesent</h1>
                <p>
                    Praesent sapien purus, dapibus vitae sagittis eu, iaculis vitae nulla. Ut fermentum sem faucibus est egestas laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse eget erat in nisl iaculis vestibulum. Curabitur ligula arcu, ornare et ultrices ut, viverra at lorem. Aenean tempus, sapien at fringilla vehicula, urna massa imperdiet enim, a ultricies lacus ex ut nulla. Cras sagittis dui non pulvinar iaculis. Nunc dictum lacus accumsan iaculis placerat. Aenean eget suscipit risus, sit amet ultrices risus. Nam dignissim vitae nisl eu consectetur. Aliquam erat volutpat. Aliquam a orci rhoncus, imperdiet dolor feugiat, ultrices neque. Vivamus ultricies sapien lorem, sit amet scelerisque quam bibendum quis. Sed non augue nulla. Nam posuere placerat eros, sed viverra libero posuere vitae.
                </p><br></br>

                <h1>Class aptent</h1>
                <p>
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus aliquet ligula lectus, quis rutrum risus venenatis at. Fusce congue urna quis justo sodales, sit amet bibendum nisi pulvinar. Curabitur nec dui lobortis, convallis libero id, tempor quam. Donec eget nisi a purus dignissim porttitor ac nec elit. Etiam eu magna quis ipsum elementum tincidunt at vel libero. Cras et mi leo. Nulla sit amet mauris sed lorem iaculis rutrum. Ut non sodales libero. Curabitur at neque non urna accumsan ultricies. Vivamus vitae lorem vulputate, iaculis felis quis, pharetra leo. Nam bibendum ultricies nisl. Integer pharetra leo eu nisi fringilla, a fringilla nulla suscipit. Pellentesque auctor a odio id tempus. Quisque diam tortor, dignissim sed lacinia auctor, fringilla eu risus. Etiam condimentum nulla sem, vel ornare orci posuere in.
                </p>
            </div>
        )
    }
}
