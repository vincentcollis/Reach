const votersReducer = (voters=[], action) => {
    switch (action.type) {
        case 'FETCH_VOTERS':
            return action.payload.data
        case 'ADD_VOTERS':
            return [voters, action.payload.data]
        default:
            return voters
    }    
}

export default votersReducer