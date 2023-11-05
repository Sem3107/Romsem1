import React from 'react'
import './header.css'

function Search({search}) {

  return (
    <div>
      <input style={{display:`${search?"inline-block":"none"}`}} type="search" className="poisk" placeholder='Найти'/>
   
    </div>
  )
}

export default Search