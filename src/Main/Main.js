import React, { useState } from 'react'
import Pizza from '../Content/SidebarItems/Pizza/Pizza'
import Roll from '../Content/SidebarItems/Roll/Roll'
import Drink from '../Content/SidebarItems/Drink/Drink'
import './Main.css'
import SortItem from './SortItem'


function Main() {
  const [sorta, setSorta] = React.useState('')
  const [open, setOpen] = useState(false)
  return (
    <div className='mainWrap'>
      <div className='pizzaAndSortWrap'>
  <h1 className="main_title">Пицы</h1>


<div className='sortblokWrap'>
    <p onClick={()=>setOpen(!open)} className="sortTitle">Сортировка: {sorta}</p>

    {open&&(

  <div className="sortWrap">
  
    <SortItem text='по названию' setSorta={setSorta}/>
    <SortItem text='сначала дешевле' setSorta={setSorta}/>
    <SortItem text='сначала дороже ' setSorta={setSorta}/>
    
  </div>
    )}

</div>
      </div>
<Pizza sorta={sorta} setSorta={setSorta}/>
<h1 className="main_title">НАПИТКИ</h1>
<Drink  sorta={sorta} setSorta={setSorta}/>
<h1 className="main_title">РОЛЛЫ</h1>
<Roll  sorta={sorta} setSorta={setSorta}/>
    </div>
  )
}

export default Main