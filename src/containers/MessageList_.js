import React from 'react'
import {connect} from 'react-redux'
import MessageList from '../components/MessageList'

const MessageList_ = connect(state=>(
    {
        messages: state.messages
    }
), {})(MessageList)

export default MessageList_