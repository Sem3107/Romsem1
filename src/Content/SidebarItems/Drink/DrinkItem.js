import React from 'react'
import './Drink.css'

function DrinkItem({v}) {
  return (
    <div className='drinkItemWapper'>
        <img src={v.imageUrl} width='100px' height='100px' alt="" />
        <p className="drinkname">{v.name}</p>
     
        <p className="price">Цена: {v.price} руб.</p>
        <p></p>
        <button>Заказать</button>
    </div>
  )
}

export default DrinkItem