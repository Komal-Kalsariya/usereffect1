import React, { useEffect, useState } from 'react'

const Timer = () => {
    let [second,settimer]=useState(0)

    useEffect(()=>{
        let interval=setInterval(()=>{
            settimer(presecond=>presecond+1)
        },1000)
        return ()=>clearInterval(interval)
    },[second])
  return (
    <div>Time:{second}second
   </div>
  )
}

export default Timer