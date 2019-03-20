import React, { Component } from "react";
import "./App.css";
import MessageList from "./components/MessageList"
import Users from "./components/Users"
import TextBox from "./components/TextBox"
import createStore from "redux"

/*let store = createStore(rootReducer)*/

class App extends Component {
  render() {
    return (
      <div id="container">
        <aside id="sidebar"><Users/></aside>
        <section id="main">
          <section id="messages-list"><MessageList/></section>
          <section id="new-message"><TextBox/></section>
        </section>
      </div>
    );
  }
}
export default App;