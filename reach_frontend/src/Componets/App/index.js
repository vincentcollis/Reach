import React, {useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

import {useDispatch} from 'react-redux'
import {fetchMessages, fetchVoters} from '../../Redux/actions'

import CreateConversation from '../CreateConversation'
import AdminPanel from '../AdminPanel/ignore'
import Messenger from '../Messenger'
import LoginUser from '../LoginUser'
import LoginAdmin from '../LoginAdmin'
import Home from '../Home'


// Prime React Dependacies



export default function Index(props) {
  
  const dispatch = useDispatch()

  // If using tunnell to expose localhost go to 
    // Redux -> api -> reachBackend.js and insert tunnel url

  // Load data from API on first load
  useEffect(() => {dispatch(fetchVoters())},[])
  useEffect(() => {dispatch(fetchMessages())},[])
  
  // Fetch new data from API every xxxx amout of seconds
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchVoters())
      dispatch(fetchMessages())
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route excat path='/admin_panel' component={AdminPanel}/>
          <Route excat path='/messenger/add_conversation' component={CreateConversation} />
          <Route excat path='/messenger' component={Messenger}/>
          <Route excat path='/user_login' component={LoginUser}/>
          <Route excat path='/admin_login' component={LoginAdmin}/>
          <Route excat path='/' component={Home}/>
        </Switch>
      </div>
    </Router>
  )
}


