import React from 'react'

const Buttons = ({addWater, deleteWater}) => {
  return (
    <div className='Buttons' >
        <button onClick={addWater} >addWater</button>
        <button onClick={deleteWater} >deleteWater</button>
    </div>
  )
}

export default Buttons