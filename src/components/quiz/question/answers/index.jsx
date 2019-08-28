import React, { Component } from 'react'
import './answers.css'

export default class Answers extends Component {
  handleClick(e){
    this.changeClass(e)
    this.props.next(e)
  }
  changeClass(e) {
    if (this.props.value) {
        e.target.className = "answer correct"
    } else {
        e.target.className = "answer wrong"
    }
  }
  render() {
    return (
      <div id="answer" className="answer" onClick={ e => this.handleClick(e) }>
        { this.props.ans }
      </div>
    )
  }
}   
