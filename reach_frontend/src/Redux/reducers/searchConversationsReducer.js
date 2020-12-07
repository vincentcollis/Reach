const searchConversationsReducer = (search=null, action) =>{
    return action.type === 'SEARCH_CONVERSATIONS' ? action.payload : search
}

export default searchConversationsReducer