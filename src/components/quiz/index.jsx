import React, { Component } from 'react'
import Question from './question'
import Win from './win'
import db from './data.json'

class Quiz extends Component {
  constructor(props){
    super(props)
    this.state = {
        questions: this.shuffle(db),
        count: 0,
        win: false,
        correct: 0,
        fail: 0
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

  current(question) {
    if (this.state.win) {
      return <Win correct={ this.state.correct } fail={ this.state.fail } />
    } else {
      const q = this.state.questions[question]
      return <Question 
        key={ question } 
        question={ q.question }
        answers={ q.answers }
        onNext={ (e, isCorrect) => this.handleClick(e, isCorrect) }
      />
    }
  }

  handleClick(e, isCorrect) {
    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    sleep(2000).then(() => {
      if (isCorrect) {
        this.setState({
          correct: this.state.correct+1
        })
      } else {
        this.setState({
          fail: this.state.fail+1
        })
      }
      if ( this.state.count === this.state.questions.length-1) {
        this.setState({
          win: true
        })
      } else {
        this.setState({
          count: this.state.count + 1
        })
      }
    })
  }

  render() {
    return (
      <div>
        { this.current(this.state.count) }
      </div>
    )
  }
}

export default Quiz
