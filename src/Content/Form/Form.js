import React from 'react'
import './Register.css'
import {Link} from 'react-router-dom'
import Registr from './Registr'

function Form() {
  return (
    <div className='authBlok'>
    <div className='authWrap'>
        <h1>Авторизация</h1>

        <form action="">
          
            <label htmlFor="name">Введите логин или e-mail:</label>
            <input id='name' type='e-mail' />
   
            <label htmlFor="pas">Введите пароль: </label>
            <input id='pas' type='password' />
   
  
            <p>забыли пароль? </p>
            <Link to='/registr'>
         <Registr/>
            </Link>
          

            <div className="formBtnWrap">
            <button type='submit'>Войти</button>
              <Link to='/'>
            <button type='submit'>
              На главную
              </button>
              </Link>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Form