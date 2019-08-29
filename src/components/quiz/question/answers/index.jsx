import React, { Component } from 'react'
import './answers.css'

export default class Answers extends Component {
  constructor(props){
    super(props)
    this.state = {
        isBlocked: this.props.blocked
    }
  }
  handleClick(e){
    const isCorrect = this.props.value
    if (isCorrect) {
      e.target.className = "answer correct"
    } else {
      e.target.className = "answer wrong"
    }
    this.props.next(e, isCorrect)
  }
  show() {
    if (this.props.blocked) {
      return <div id="answer" className="answer">
        { this.props.ans }
      </div>
    } else {
      return <div id="answer" className="answer" onClick={ e => this.handleClick(e) }>
        { this.props.ans }
      </div>
    }
  }
  render() {
    return ( 
      <div>
        { this.show() }
      </div>
    )
  }
}   
