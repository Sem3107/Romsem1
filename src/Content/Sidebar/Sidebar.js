import React from 'react'
import { Link } from 'react-router-dom'
import s from './Sidebar.module.css'
import Logo from './Logo'

function Sidebar() {
  return (
    <aside>
      <ul className={s.sidebarWrap}>
      <Logo/>
        <Link className={s.sidebar_link} to='/pizza'>
        Пицы
        </Link>
        <Link className={s.sidebar_link}  to='/sushi'>
        Суши
        </Link>
        <Link  className={s.sidebar_link}  to='/sets'>
        Сеты
        </Link>
        <Link  className={s.sidebar_link}  to='/rols'>
        Роллы
        </Link>
        <Link  className={s.sidebar_link}  to='/salad'>
        Салаты
        </Link>
        <Link  className={s.sidebar_link}  to='/soup'>
        Супы
        </Link>
        <Link  className={s.sidebar_link}  to='/drinks'>
        Напитки
        </Link>
        <Link  className={s.sidebar_link}  to='/sale'>
        Акции
        </Link>
      </ul>
    </aside>
  )
}

export default Sidebar