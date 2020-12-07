import reachBackend from '../api/reachBackend'

// Get All Messages from API
export const fetchMessages = () => {
  
  return async (dispatch) => {
    const response = await reachBackend.get('/messages')
    dispatch({type: 'FETCH_MESSAGES', payload: response.data.data})
  }
}

// Get All Voters from API
export const fetchVoters = () => {
  // console.log(dispatch)
  return async (dispatch) => {
    // console.log("working")
    const response = await reachBackend.get('/voters')
    
    dispatch({type: 'FETCH_VOTERS', payload: response.data})
  }
}

// Add a message
export const composeMessage = (message) => {
  const {voter_id, user_id, body, origin} = message
  return async (dispatch) => {
    const resposne =  await reachBackend.post('/send_sms',{
      voter_id, user_id, body, origin
    })
  }
  
}

// Add a voter
export const addVoter = (voter) => {
  return{
    type: "ADD_VOTERS",
    payload: voter
  }
}

// set selected conversation
export const selectConversation = (conversation) => {
  return{
    type: "CONVERSATION_SELECTED",
    payload: conversation
  }
}

// set Search Messages filter
export const searchConversations = (search) => {
  return{
    type: "SEARCH_CONVERSATIONS",
    payload: search
  }
}






// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import axios from 'axios'

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export const getMessages = () => {
//     return dispatch =>{
//         dispatch(getMessages())
//         axios.get('http://localhost:3000/messages')
//           .then(({data}) =>{
//             console.log(data)
//           })

//     }
//   }