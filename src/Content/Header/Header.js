import React, { useState } from 'react'
import {SlBasket} from 'react-icons/sl'
import {ImEnter} from 'react-icons/im'
import {BsSearch} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import Search from './Search'
import './header.css'
import Contacts from './Contacts'


function Header({poisk, setPoisk}) {
  const [search, setSearch]=useState(false)
  return (
    <div className='headerwrap'>
        <Contacts/>

      <div className='selectAndSearchWrap'>
        <div className='selectWrapp'>
          <p>Выбирайте город:</p>
      <select name="Выбирайте город" id="" className='header_select'>
        <option value="Samara">Самара</option>
        <option value="Baku">Баку</option>
        <option value="Moscow">Москва</option>
      </select>
        </div>

        <Search search={search} poisk={poisk} setPoisk={setPoisk} />
      </div>

        <div className='korzinkawrap'>
      
          <BsSearch onClick={()=>setSearch(!search)}/>
        <Link className='registerIcon' to='/auth'>
        <ImEnter/>
        
        </Link>

        <SlBasket/>
        </div>
    </div>
  )
}

export default Header