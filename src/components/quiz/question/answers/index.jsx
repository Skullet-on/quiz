import React, { Component } from 'react'
import './answers.css'

export default class Answers extends Component {
  handleClick(e){
    const isCorrect = this.props.value
    if (isCorrect) {
      e.target.className = "answer correct"
    } else {
      e.target.className = "answer wrong"
    }
    this.props.next(e, isCorrect)
  }
  render() {
    return (
      <div id="answer" className="answer" onClick={ e => this.handleClick(e) }>
        { this.props.ans }
      </div>
    )
  }
}   
