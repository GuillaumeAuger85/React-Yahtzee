import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ['one', 'two', 'three', 'four', 'five', 'six'],
  }
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.handleClick(this.props.idx)
  }
  render() {
    return (
      <i
        disabled={this.props.disabled}
        className={`Die fas fa-dice-${this.props.numberWords[this.props.val - 1]} fa-5x ${this.props.locked && 'Die-locked'} ${this.props.rolling ? 'Die-rolling': ""}`}
        onClick={this.handleClick}
      >
      </i>
    );
  }
}

export default Die;
