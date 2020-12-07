const selectedConversationReducer = (conversation=null, action) =>{
    return action.type === 'CONVERSATION_SELECTED' ? action.payload : conversation
}

export default selectedConversationReducer