import React from 'react'

function SortItem({text, setSorta}) {
  return (
    <li onClick={()=>setSorta(text)} >{text}</li>
  )
}

export default SortItem