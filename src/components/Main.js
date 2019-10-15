import React from 'react'
import StopWatch from '../Container.js'
import '../css/main.css'

const Main = () => (
    <div style={kabegami}>
      <StopWatch />
      <img className='delayedImage' src="https://images.cooltext.com/5334241.png" alt="GANBA!! ☆ " style={{padding: 30}} />
    </div>
)

const kabegami = {
    backgroundColor: '#ffffbc',
    textAlign:"center",
    height:"450px",
    paddingTop:"20px",
}

export default Main

// const store = createStore(timer)
// import {timer} from '../reducer.js'
// import {createStore} from 'redux'
