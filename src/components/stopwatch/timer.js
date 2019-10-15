import React from 'react'

export class Timer extends React.Component {
  render () {
    return (
      <div style={{fontSize: 50,color:'#5abbed'}}>
        <span className='timer-number' role='hour'>{this.props.hours}</span>
        <span className='timer-semicolon'>:</span>
        <span className='timer-number' role='minute'>{this.props.minutes}</span>
        <span className='timer-semicolon'>:</span>
        <span className='timer-number' role='second'>{this.props.seconds}</span>
      </div>
    )
  }
}