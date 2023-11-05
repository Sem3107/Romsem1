import React from 'react'
import './header.css'

function Contacts() {
  return (
    <div className='contactWrap'>
        <p className="ourPhone">Наши контакты:</p>
        <div className='tel'>
        <a href="tel:+79171103419">+79171103419</a>
        <a href="tel:+79171103419">+79276870657</a>
        </div>
        <div className="workTime">
            <p>Рабочие часы: 10:00-00:00</p>
        </div>
    </div>
  )
}

export default Contacts