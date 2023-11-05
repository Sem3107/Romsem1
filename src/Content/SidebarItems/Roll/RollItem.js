import React from 'react'
import './Roll.css'


function RollItem({v}) {
  return (
    <div className='pizzaItemWrapper' >
        <img src={v.imageUrl} alt="" />
        <h3 className="name">{v.name}</h3>
        <p className="price">Цена: {v.price} руб.</p>
        <button>Заказать</button>
    </div>
  )
}

export default RollItem