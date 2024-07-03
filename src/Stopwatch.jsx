import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    let [minite,setMin]=useState(0)
    let [second,setSecond]=useState(0)
    let [hours,setHours]=useState(0)
    let [start,setStart]=useState(false)

    useEffect(()=>{
      let timer= setInterval(()=>{
        if(start){
            setSecond(second+1)
            if(second==59){
                setSecond(0)
                setMin(minite+1)
                
            }
            if(minite==59){
                setMin(0)
                setHours(hours+1)
            }
        }
       },1000)
       return ()=>{
        clearInterval(timer)
       }
    },[start,second])


  return (
    <div>
        <h1>{hours}:{minite}:{second}</h1>
        <button onClick={()=>setStart(!start)}>
            {start==true?"stop":"start"}</button>
        <button onClick={()=>setStart(false)}>Stop</button>
        <button onClick={()=>{setStart(false)
            setHours(0)
            setMin(0)
            setSecond(0)
        }}>Reset</button>
    </div>
  )
}

export default Stopwatch