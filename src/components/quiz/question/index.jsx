import React, { Component } from 'react'
import Answers from './answers'
import './question.css'

export default class Question extends Component {
  constructor(props){
    super(props)
    this.state = {
        answers: this.shuffle(this.props.answers),
        count: 0
    }
  }

  shuffle(arr){
    var j, temp;
    for(var i = arr.length - 1; i > 0; i--){
      j = Math.floor(Math.random()*(i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }
  list() {
    const answers = this.state.answers;
    return answers.map((item, index) => 
      <Answers 
        key={ index } 
        ans={ item.key }
        value={ item.value }
        next={ (e, isCorrect) => this.next(e, isCorrect) }
      />)
  }
  next(e, isCorrect){
    this.props.onNext(e, isCorrect)
  }
  render() {
    return (
      <div>
        <div className="question">
          { this.props.question }
        </div>
        { this.list() }
      </div>
    )
  }
}
