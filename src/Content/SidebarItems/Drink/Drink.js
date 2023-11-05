import React from 'react'
import data from './data'
import DrinkItem from './DrinkItem'
import './Drink.css'

function Drink({sorta, setSorta}) {
  const [drink, setDrink]= React.useState(data)

  return (
    <div className='drinkWrap'>
      {/* {drink.sort((a, b)=>{

if(sorta ==='сначала дешевле'){
  return a.price-b.price
}
 else if(sorta === 'сначала дороже'){
return  b.price-a.price
} 
else if (sorta === 'по названию'){
  return a.name > b.name ? 1:-1
}
        // return b.price - a.price
}) */}
{drink.sort((a, b)=>{
if(sorta==="по названию"){
  return a.name > b.name ? 1:-1
} else if( sorta === "сначала дешевле"){
  return a.price-b.price
} else if(sorta === 'сначала дороже'){
  return b.price - a.price
}
return b.price - a.price
}).map(value=>
       <DrinkItem v={value}/>
        )}
    </div>
  )
}

export default Drink