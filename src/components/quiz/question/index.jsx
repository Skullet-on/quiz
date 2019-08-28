import React, { Component } from 'react'
import Answers from './answers'

export default class Question extends Component {
  list() {
    const answers = this.props.answers;
    return answers.map((item, index) => 
      <Answers 
        key={ index } 
        ans={ item.key }
        value={ item.value }
        next={e => this.next(e)}
      />)
  }
  next(e){
    this.props.onNext(e)
  }
  render() {
    return (
      <div className="question">
        { this.props.question }
        { this.list() }
      </div>
    )
  }
}
