
const messagesReducer = (messages=[], action) => {
    switch (action.type) {
        case 'FETCH_MESSAGES':
            return action.payload
        case 'COMPOSE_MESSAGE':
            return action.payload
        default:
            return messages
    }
}

export default messagesReducer