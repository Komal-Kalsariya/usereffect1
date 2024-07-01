import React, { useEffect, useState } from 'react'

const Styler = ({isHighlighted}) => {
  let[style,setStyles]=useState({})
// console.log(style)
// console.log(setStyles)
    useEffect(()=>{
      console.log("mounted");
     if(isHighlighted){
      setStyles({
        backgroundColor: 'yellow',
        color: 'black',
        padding: '10px',
        borderRadius: '5px',
    
      });
     }
     else{
      setStyles({
        backgroundcolor:"pink",
        color: 'black',
        padding: '10px',
        borderRadius: '5px',
      });
     }
    },[isHighlighted])

  return (
    <div style={style}>
      this is {isHighlighted ? 'highlighted' : 'default'}style component
    </div>
  )
}

export default Styler