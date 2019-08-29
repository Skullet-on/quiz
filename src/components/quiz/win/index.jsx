import React, { Component } from 'react'
import './win.css'

export default class Win extends Component {
  handleClick(e){
    window.location.reload();
  }
  render() {
    return (
      <div className="statistic">
        Your score:
        <div className="stats">
          <p>Correct answers: { this.props.correct }</p>
          <p>Fail answers: { this.props.fail }</p>
        </div>
        <button className="reload" onClick={ e => this.handleClick(e) }>Reload</button>
      </div>
    )
  }
}
