import React, { useEffect, useState } from 'react'

const CountdownTimer = () => {
    let init=60
    let [count,setcount]=useState(init)
    useEffect(()=>{
    if(count>0){
       let time=setInterval(()=>{
        setcount(prevcount=>prevcount-1)
       },1000)
       return ()=>{
        clearInterval(time)
       }
    }
    },[count])   
  return (
    <div>{
        count>0?(
            <p>time left{count}</p>

        ):(
            <p>time up</p>
        )

        }
        </div>
  )
}

export default CountdownTimer