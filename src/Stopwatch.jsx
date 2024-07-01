import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    let [time,settime]=useState(0)
    let [isRunning,setRuning]=useState(false)

    useEffect(()=>{
        let timer
        if(isRunning){
            timer=setInterval(()=>{
                setRuning(prevtime=>prevtime+1)
            },1000)
        }
        else if(!isRunning){
            clearInterval(timer)
        }
        return ()=>{
            clearInterval(timer)
        }
    },[isRunning])

    const handlestart =()=>setRuning(true)
    const handlepause=()=>setRuning(false)
    const handlereset=()=>{
        setRuning(false)
        settime(0)
    }

    const formatetime=(time)=>{
        const getsecond=`${time%60}`.slice(-2)
        const minit=`${Math.floor(time/60)}`
        const getminit=`${minit%60}`.slice(-2)
        const gethours=`${Math.floor(time/3600)}`.slice(-2)
        return `${gethours} : ${getsecond} :${getminit}`

    }

  return (
    <div>
        <h2>StopWatch</h2>
        <div>{formatetime(time)}</div>
        <button onClick={handlestart}>start</button>
        <button onClick={handlepause}>pause</button>
        <button onClick={handlereset}>reset</button>
    </div>
  )
}

export default Stopwatch