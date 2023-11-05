import React from 'react'
import './Roll.css'
import data from './data'
import RollItem from './RollItem'

function Roll({v}) {

  const [pizza, setPiza] = React.useState(data)
  return (
    <div className='pizzaWrap'>
      {pizza.map(value=>
        <RollItem v={value}/>
        )}
    </div>
  )
}

export default Roll