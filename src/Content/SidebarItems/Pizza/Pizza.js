import React from 'react'
import './Pizza.css'
import data from './data'
import PizzaItem from './PizzaItem'

function Pizza({v, sorta, setSorta}) {

  const [pizza, setPiza] = React.useState(data)
  return (
    <div className='pizzaWrap'>
  
      {
  
  (
      pizza.sort((a,b)=>{

        if(sorta==="по названию"){
          return a.name > b.name ? 1 : -1
        }
         else if(sorta === 'сначала дешевле'){
          return a.price-b.price
        } 
        else if (sorta === 'сначала дороже'){
          return b.price-a.price
        }
        return b.price - a.price
}))
      
      .map(value=>
        <PizzaItem v={value}/>
        )}
    </div>
  )
}

export default Pizza