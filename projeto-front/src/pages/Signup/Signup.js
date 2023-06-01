import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToSignup } from '../../router/coordinates'
import { Button, ContainerSignup } from './SignupStyle'
import Header from '../../components/Header/Header'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import bar from '../../assets/barraPreta.png'
import { emailRegex, passwordRegex } from '../../constants/regex'

const Signup = () => {
  const [signupAccount, setSignupAccount] = useState([])
  const [nickname, setNickname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const token = window.localStorage.getItem("token")
  const navigate = useNavigate()

  const body = {
    'name': nickname,
    'email': email,
    'password': password
  }

  const signup = async () => {
    try {
      if (!email.match(emailRegex)) {
        alert('Por favor, digite um email válido.');
        return;
      }

      if (!password.match(passwordRegex)) {
        alert('A senha deve ter no mínimo oito caracteres, contendo pelo menos uma letra e um número.');
        return;
      }
      const response = await axios.post(`${BASE_URL}/users/signup`, body)

      const { token } = response.data
      setSignupAccount(token)
      window.localStorage.setItem("token", token)
      token ? alert('Cadastro realizado com sucesso, clique em entrar para fazer o login') : goToSignup(navigate)
        && alert('Erro de cadastro!')
      window.location.reload()

    } catch (error) {
      console.log(error)
      alert('Usuário já Existe!.')

    }
  }

  return (
    <ContainerSignup>
      <Header />

      <h1>Olá, boas vindas ao LabEddit ;)</h1>

      <div className='input'>
        <input
          type='text'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder='   Apelido'></input>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='   E-mail'></input>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='   Senha'></input>
      </div>
      <div className='authorization'>
        <div>Ao continuar, você concorda com o nosso <a href='https://thestartlaw.com/termo-de-uso/' target="_blank">Contrato de usuário</a> e nossa <a href='https://thestartlaw.com/termo-de-uso/' target="_blank">Política de Privacidade</a></div>
      </div>
      <div className='contrato'>
        <input type="checkbox" name="checkbox"></input>
        <span>Eu concordo em receber emails sobre coisas legais no Labeddit</span>
      </div>

      <Button onClick={() => signup()}>Cadastrar</Button>

      <img className='bar' src={bar}></img>

    </ContainerSignup>
  )
}

export default Signup