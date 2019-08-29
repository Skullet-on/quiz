import React, { Component } from 'react'

export default class Win extends Component {
  render() {
    return (
      <div>
        You Win!
        Correct answers: { this.props.correct }
        Fail answers: { this.props.fail }
      </div>
    )
  }
}
