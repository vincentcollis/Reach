import React, {useEffect} from 'react';
import {useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";


import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';


import './ConversationList.css';

export default function Index(props){
  let history = useHistory();
  function handleAddBtnClick() {history.push("/messenger/add_conversation")}

  // Map value to the state this component needs access to
  const voters = useSelector(state => state.voters)
  const conversationSearch = useSelector(state => state.search)

  // Set conversations that will be rendered in conversationList
  let conversations;

  // Filter conversations displayed in conversationsList 
  if(conversationSearch){
    conversations = voters.filter(voter =>{
      return voter.attributes.name.toUpperCase().includes(conversationSearch.toUpperCase())
    })
    console.log(conversations)
  } else {
    conversations = voters
  }

  let orderedConversations = conversations.sort((a,b)=>{
      return b.attributes.last_message_id - a.attributes.last_message_id
    })
    
    

    const handleClick = (event) => {
      // console.log('working')
      // console.log(event.target.dataset.type)
      switch (event.target.dataset.type) {
        case 'add-convo':
          handleAddBtnClick()
          break;
      
        default:
          break;
      }
    }

    return (
      <div className="conversation-list">
        <Toolbar
          title="Reach"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" handleClick={handleClick} btnType={'add-convo'}/>
          ]}
        />
        <ConversationSearch />
        {
          orderedConversations.map(voter =>
            <ConversationListItem
              key={voter.id}
              id={voter.id}
              data={voter.attributes}
            />
          )
        }
      </div>
    );
}



