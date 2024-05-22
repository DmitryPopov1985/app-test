import React, { useContext } from 'react'
import MyInput from '../components/UI/MyInput/MyInput'
import MyButton from '../components/UI/MyButton/MyButton'
import { AuthContext } from '../context'

export default function Login() {
    const {setIsAuth} = useContext(AuthContext)
    const login = (event) => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', true)
    }
  return (
    <div style={{width: 800,margin: '0 auto'}}>
        <h1>Страница для логина</h1>
        <form onSubmit={login} >
            <MyInput type="text" placeholder='Введите логин'/>
            <MyInput type="password" placeholder='Введите пароль'/>
            <MyButton  >Войти</MyButton>
        </form>
    </div>
  )
}
