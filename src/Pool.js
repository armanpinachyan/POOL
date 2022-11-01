import React from 'react'
import { useState, useEffect } from 'react'
import Water from './Water'

const Pool = ({count}) => {

    const [arr,setarr] = useState([])

    useEffect(()=>{
        const newarr = []
        for(let i = 0; i<count; i++) newarr.push(i)
        setarr(newarr)
    },[count])

  return (
    <div className='Pool' >
        {
            arr.map(el => <Water key={el}/>)
        }
    </div>
  )
}

export default Pool