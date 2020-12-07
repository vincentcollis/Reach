import {combineReducers} from 'redux'

import messagesReducer from './messagesReducer'
import votersReducer from './votersReducer'
import selectedConversationReducer from './selectedConversationReducer'
import searchConversationsReducer from './searchConversationsReducer'



export default combineReducers({
    messages: messagesReducer,
    voters: votersReducer,
    conversation: selectedConversationReducer,
    search: searchConversationsReducer,
    
})

