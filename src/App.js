import React from 'react'
import { useState } from 'react'
import Pool from './Pool'
import Buttons from './Buttons'

const App = () => {

  const [count,setcount] = useState(0)
  let starttime, interval

  const addWater = ()=>{
    starttime = new Date().getTime();
    interval = setInterval(()=>{
      setcount(prevcount => prevcount+1)
      if(new Date().getTime()- starttime > 8000){
      clearInterval(interval)
      }
    },2000)
  }
  const deleteWater = ()=>{
    starttime = new Date().getTime();
    interval = setInterval(()=>{
      setcount(prevcount => prevcount-1)
      if(new Date().getTime() - starttime > 8000)
      clearInterval(interval)
    },2000)
  }

  return (
    <div className='App' >
      <Buttons addWater={addWater} deleteWater={deleteWater}  />
      <Pool count={count} />
    </div>
  )
}

export default App