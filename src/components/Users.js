import React, { Component } from 'react'

const header = {
  textAlign: 'center',
  padding: 20,
  color: "white",
  background: "#000000",
  borderRadius: 5
}

const list = {
  margin: 5
}


export default class Users extends Component {
  render() {
    return (
      <div>
        <header style={header}>Active Users</header>
        <ul>
          <li style={list}>User 1</li>
          <li style={list}>User 2</li>
          <li style={list}>User 3</li>
          
        </ul>
      </div>
    )
  }
}
