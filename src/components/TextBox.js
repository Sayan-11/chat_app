import React, { Component } from 'react'

const style = {
  flex:0.6,


}



export default class TextBox extends Component {
  render(){
    return(
    <form className="input" onSubmit={(e) => this.submitMessage(e)}>
    <input style={style} type="text" ref="msg" />
    <input type="submit" name="Submit"/>
    </form>
    )
   

  }

}

