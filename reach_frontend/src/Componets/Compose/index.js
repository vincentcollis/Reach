import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import {composeMessage} from '../../Redux/actions'

import './Compose.css';

export default function Compose(props) {
  const dispatch = useDispatch()

  // Set to 1 to represent the only user in the data base
    // Edit this once login is implemented
  const USER_ID = '1'
  
  // receive Voter who is being messaged from the selected conversation state
  const voter_id = useSelector(state => state.conversation)
  
  // control compose form input
  const [composedMessage, setcomposedMessage] = useState('')

  
  const handleForm = (event) =>{  
    setcomposedMessage(event.target.value)
    if(event.keyCode === 13){
      sendMessage()
      setcomposedMessage('')
    }
  }

  const sendMessage = (event) => {
    // payload structure is mapped from data base for Message.create
    let payload = {
      voter_id: parseInt(voter_id),
      user_id: USER_ID,
      body: composedMessage,
      origin: true
    }
    
    dispatch(composeMessage(payload))
  }

    return (
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
          value = {composedMessage}
          onChange={handleForm}
          onKeyDown={handleForm}
        />

        {
          props.rightItems
        }
      </div>
    );
}