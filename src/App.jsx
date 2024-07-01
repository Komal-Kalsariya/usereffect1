import React, { useState } from 'react'
import LoggerComponent from './LoggerComponent'
import Timer from './Timer'
import Styler from './Styler'
import CountdownTimer from './CountdownTimer'
import Stopwatch from './Stopwatch'

const App = () => {
  let [message,setmessage]=useState("helloword")
  let [isHighlighted,setHighlited]=useState(false)
  // console.log(isHighlighted)
  // console.log(setHighlited)
  return (
    <div>
      <LoggerComponent longmessage={message}/>
      <button onClick={()=>setmessage("new message")}>Chenge message</button>
      <Timer/>
      
      <button onClick={()=>setHighlited(!isHighlighted)}>Toggle Highlighted</button>
      <Styler isHighlighted={isHighlighted}/>
      <CountdownTimer/>
      <Stopwatch/>
    </div>
  )
}

export default App