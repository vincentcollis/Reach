import React, {useEffect, useCallback} from 'react';
import {useDispatch} from 'react-redux'

import {selectConversation} from '../../Redux/actions'

import shave from 'shave';

import './ConversationListItem.css';

export default function Index(props) {
  const dispatch = useDispatch()

  // Map conversation Data
  const {id} = props 
  const {name, last_message, photo} = props.data;
  
  // Set selected conversation
  const setConversation = () => {
    let payload = [id, name]
    dispatch(selectConversation(payload))
  }
  // const selectConversation = useCallback(
  //   () => {dispatch({ type: 'CONVERSATION_SELECTED', payload: id})},
  //   [dispatch]
  // )

  // const selectedConversation = () =>{
  //   console.log(id)
  // }

  useEffect(() => {
    shave('.conversation-snippet', 30);
  })


    return (
      <div className="conversation-list-item" onClick={setConversation}>
        <img className="conversation-photo" src={photo} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{ name }</h1>
          <p className="conversation-snippet"> {last_message}</p>
        </div>
      </div>
    );
}