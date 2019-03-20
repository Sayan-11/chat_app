import * as actionTypes from "./actionTypes";

let messageId = 0;
const userId = 0;

export const addMessage = (message, user)=>({
    actionType = actionTypes.ADD_MESSAGE,
    messageId = messageId+1,
    message,
    user
})

export const addUser = (username) =>({
    actionType = actionTypes.ADD_USER,
    userId = userId + 1,
    username

})

export const messageReceived = (message, user)=>({
    actionType = actionTypes.MESSAGE_RECEIVED,
    messageId = messageId +1,
    message,
    user
})

export const updateUsers = (users)=>({
    actionType = actionTypes.UPDATE_USER_LIST,
})