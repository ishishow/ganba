import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

export default class Timer extends Component {
  static propTypes = {
    interval: PropTypes.number, // msec
    remaining: PropTypes.number.isRequired, // msec
    afterTick: PropTypes.func, // callback after each ticks
    afterComplete: PropTypes.func, // callback after remaining <= 0
    style: stylePropType, // container style object
    children: PropTypes.node, // children react element node
  }

  static defaultProps = {
    interval: 1000,
    afterTick: null,
    afterComplete: null,
    style: {},
    children: null,
  }

  static childContextTypes = {
    remaining: PropTypes.number,
  }

  constructor(props, ...args) {
    super(props, ...args);
    this.timerId = null;
    this.prevTime = null;
    this.state = { remaining: props.remaining };
  }

  getChildContext() {
    return { remaining: this.state.remaining };
  }

  componentDidMount() {
    this.timerId = setInterval(this.handleTick.bind(this), this.props.interval);
    this.prevTime = Date.now();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  clearTimer() {
    clearInterval(this.timerId);
    this.timerId = null;
    this.prevTime = null;
  }

  handleTick() {
    const currentTime = Date.now();
    const elapsed = currentTime - this.prevTime;
    const nextRemaining = this.state.remaining - elapsed;
    if (nextRemaining <= 0) {
      if (this.props.afterComplete !== null) {
        this.props.afterComplete();
      }
      this.clearTimer();
      this.setState({ remaining: 0 });
    } else {
      if (this.props.afterTick !== null) {
        this.props.afterTick(nextRemaining);
      }
      this.prevTime = currentTime;
      this.setState({ remaining: nextRemaining });
    }
  }

  render() {
    const { style, children } = this.props;
    return <div style={style}>{children}</div>;
  }
}