import React, { useState } from 'react'
import { Button, ButtonBoss, Container, Image } from './LoginStyle'
import Labeddit from '../../assets/labeddit.png'
import { goToLogin, goToPost, goToSignup } from '../../router/coordinates'
import Continuar from '../../assets/continuar.png'
import CrieUmaConta from '../../assets/criarConta.png'
import { useNavigate } from 'react-router-dom'
import Line from '../../assets/barraColorida.png'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import bar from '../../assets/barraPreta.png'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginAccount, setLoginAccount] = useState("")
  const navigate = useNavigate()

  const authenticationLogin = {
    "email": email,
    "password": password
  }

  const login = async () => {

    if (email.trim() === "" || password.trim() === "") {
      alert('Por favor, preencha o e-mail e senha para efetuar login.')
      return
    }

    try {
      const response = await axios.post(`${BASE_URL}/users/login`, authenticationLogin)
      const token = response.data.token
      setLoginAccount(token)
      window.localStorage.setItem("token", token)
      token ? goToPost(navigate) : goToLogin(navigate)

      console.log(response)

    } catch (error) {
      alert('Email ou Senha inválidos!')

    }
  }

  return (
    <Container>
      <Image src={Labeddit}></Image>
      <h1>O Projeto da rede social da Labenu</h1>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='   E-mail'
        type='email'></input>

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='   Senha'
        type='password'></input>

      <ButtonBoss>
        <Button onClick={() => login()}><img src={Continuar}></img></Button>
        <img src={Line}></img>
        <Button onClick={() => goToSignup(navigate)}><img src={CrieUmaConta}></img></Button>
      </ButtonBoss>

      <img className='bar' src={bar}></img>

    </Container>

  )
}

export default Login