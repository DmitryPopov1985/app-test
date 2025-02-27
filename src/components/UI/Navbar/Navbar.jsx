import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../MyButton/MyButton'
import { AuthContext } from '../../../context'

export default function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return (
    <div className="navbar">
      {
        isAuth
          ? <MyButton onClick={logout} >
            Выйти
          </MyButton>
          : null
      }

      <div className="navbar__links">
        <Link to={'/about'}>О сайте</Link>
        <Link to={'/posts'}>Посты</Link>
      </div>
    </div>
  )
}
