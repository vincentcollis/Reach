import React from 'react';
import './ConversationSearch.css';

import {searchConversations} from '../../Redux/actions'
import { useDispatch } from 'react-redux'



export default function ConversationSearch() {
  const dispatch = useDispatch()

  const setConversationSearch = (event) => {
    let search = event.target.value
    
    dispatch(searchConversations(search))
  }

  

    return (
      <div className="conversation-search">
        <input
          type="search"
          className="conversation-search-input"
          placeholder="Search Messages"
          onChange={setConversationSearch}
        />
      </div>
    );
}