import React from 'react'
import ComposedTextField from '../commons/Inputs'
import './login.css'
import ButtonSizes from '../commons/Button'

const Login = () => {
  return (
    <div className='content'>
      <ComposedTextField />
      <ButtonSizes/>
    </div>
  )
}

export default Login