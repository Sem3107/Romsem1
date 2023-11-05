import React from 'react'
import Sidebar from '../Content/Sidebar/Sidebar'
import HomeContent from '../Content/HomeContent/HomeContent'
import s from './Home.module.css'

function Home() {
  return (
    <div className={s.homeWrap}>
  
        <Sidebar/>
        <HomeContent/>
    </div>
  )
}

export default Home