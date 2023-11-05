import React, { useState } from 'react'
import Pizza from '../SidebarItems/Pizza/Pizza'
import Soup from '../SidebarItems/Soup/Soup'
import Sushi from '../SidebarItems/Sushi/Sushi'
import Sets from '../SidebarItems/Sets/Sets'
import Drink from '../SidebarItems/Drink/Drink'
import Salat from '../SidebarItems/Salat/Salat'
import Sale from '../SidebarItems/Sale/Sale'
import Roll from '../SidebarItems/Roll/Roll'
import Main from '../../Main/Main'
import Header from '../Header/Header'
import {Route,Routes} from "react-router-dom";
import './homecontent.css'
import Form from '../Form/Form'
import Registr from '../Form/Registr'


function HomeContent() {

  const [poisk, setPoisk]=useState('')

  return (
    <>
    <div className='homeContentWrap'>
    <Header/>

    <Routes>
      <Route path='/' element={<Main/>}/>
  
        <Route path='/pizza' element={<Pizza />}/>
     
        <Route path='/soup' element={<Soup/>}/>
        <Route path='/sets' element={<Sets/>}/>
        <Route path='/salad' element={<Salat/>}/>
        <Route path='/sushi' element={<Sushi/>}/>
        <Route path='/drinks' element={<Drink/>}/>
        <Route path='/rols' element={<Roll/>}/>
        <Route path='/sale' element={<Sale/>}/>
         <Route path='/auth' element = {<Form/>}/>
         <Route path='/registr' element = {<Registr/>}/>
    </Routes>
        
  
    </div>
      
 
    </>
  )
}

export default HomeContent