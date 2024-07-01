import React, { useEffect } from 'react'

const LoggerComponent = ({longmessage}) => {

useEffect(()=>{
    console.log("Compound mount")

    return ()=>{
        console.log("unmpoundet")
    }
},[])
useEffect(()=>{
    console.log(`prop change ${longmessage}`)
},[longmessage])

  return (
    <div>
    <p>{longmessage}</p> 
    </div>
  )
}

export default LoggerComponent