import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux'

import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';

// import ReactTransitionGroup from 'react-addons-transition-group'

import './MessageList.css';

export default function MessageList(props) {
  // set user id
  const MY_USER_ID = 'user'

  // all messages currently in application fetched from API
  const messages = useSelector(state => state.messages)
  // last selected conversation
  const conversation = useSelector(state => state.conversation) 
  
  
  //// <===  find voter_id of last message sent   ===> 
  const lastMessageVoterID = () =>{
    let output = null
    let sortedMessages = messages.sort((a,b)=>{return b-a})
    output = sortedMessages[0] ? sortedMessages[0].attributes.voter_id : null
    
    return output
  } 

  const lastMessageVoterName = () =>{
    let output = null
    let sortedMessages = messages.sort((a,b)=>{return b-a})
    output = sortedMessages[0] ? sortedMessages[0].attributes.voter_name : null
    
    return output
  }
  
  
  // filter messages by conversation that was last selected from conversationList
  let filteredMessages;
  if(conversation){
    filteredMessages = messages.filter(message => message.attributes.voter_id === parseInt(conversation[0])) 
  }else{
    // return null
    filteredMessages = messages.filter(message => message.attributes.voter_id === parseInt(lastMessageVoterID())) 
  }

  const renderMessages = () => {
    
    let i = 0,
        messageCount = filteredMessages.length,
        currentThread = []

    while (i < messageCount) {
      let previous = filteredMessages[i - 1],
          current = filteredMessages[i],
          next = filteredMessages[i + 1],
          isMine = current.attributes.sender === MY_USER_ID,
          currentMoment = moment(current.timestamp),
          prevBySameAuthor = false,
          nextBySameAuthor = false,
          startsSequence = true,
          endsSequence = true,
          showTimestamp = true

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));

        prevBySameAuthor = previous.author === current.author;
        
        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }
        
        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }
      
      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;
        
        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }
    
      currentThread.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current.attributes}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return currentThread;
  }

    return(
      <div className="message-list">
        <Toolbar
          title= {(conversation) ? conversation[1]: lastMessageVoterName()}
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        />

        <div className="message-list-container">{renderMessages()}</div>

        <Compose rightItems={[
          <ToolbarButton key="photo" icon="ion-ios-camera" />,
          <ToolbarButton key="image" icon="ion-ios-image" />,
          <ToolbarButton key="audio" icon="ion-ios-mic" />,
          <ToolbarButton key="money" icon="ion-ios-card" />,
          <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
          <ToolbarButton key="emoji" icon="ion-ios-happy" />
        ]}/>
      </div>
    );
}