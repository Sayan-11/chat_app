import React, { Component } from 'react'

const header = {
  textAlign: 'center',
  padding: 20,
  color: "white",
  background: "#000000",
  borderRadius: 5
}


const list = {
  margin: 10,
  padding: 10,
  listStyleType: "none"
}

export default class MessageList extends Component {
  render() {
    return (
      <div>
        <header style={header}>Welcome to chat room!</header>
        <ul>
          <li style={list}>User 1: Test Message</li>
        </ul>
      </div>
    )
  }
}
