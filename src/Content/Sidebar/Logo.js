import React from 'react'
import { Link } from 'react-router-dom'
import s from './Sidebar.module.css'

function Logo() {
  return (
    <Link to='/' className={s.logoWrap}>
        <img className={s.logoimg} src="https://eaglenik.github.io/Project-romsem/images/logo.png" alt="Romsem" />
        <img className={s.logoName} src="https://www.uni-mannheim.de/media/_processed_/8/b/csm_RomSem-Logo_farbig_3e5ae79ee8.png" alt="" />
    
    </Link>
  )
}

export default Logo