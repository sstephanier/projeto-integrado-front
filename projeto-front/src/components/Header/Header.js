import React from 'react'
import Entrar from '../../assets/Entrar.png'
import LogoPequena from '../../assets/miniLogo.png'
import Logout from '../../assets/Logout.png'
import { goToLogin, goToPost } from '../../router/coordinates'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Button, Container, Image } from './HeaderStyle'
import close from '../../assets/fechar.png'

const Header = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()

    const deleteLogin = () => {
        localStorage.removeItem('token')
        goToLogin(navigate)
    }

    const threeHeaders = () => {

        switch (location.pathname) {

            case `/signup`:
                return (
                    <div className='signup'>
                        <Image src={LogoPequena}></Image>
                        <button onClick={() => goToLogin(navigate)}><img src={Entrar}></img></button>
                    </div>
                )

            case `/posts`:
                return (
                    <>
                        <Image src={LogoPequena}></Image>
                        <Button onClick={() => deleteLogin()}><img src={Logout}></img></Button>
                    </>
                )
            case `/comments/${params.id}`:
                return (
                    <>
                        <button className='close' onClick={() => goToPost(navigate)}><img src={close}></img></button>
                        <Image src={LogoPequena}></Image>
                        <Button onClick={deleteLogin}><img src={Logout}></img></Button>
                    </>
                )
            default:
                return (
                    <Button onClick={() => goToLogin(navigate)}>Página Inicial</Button>
                )
        }
    }
    return (

        <Container>
            {threeHeaders()}
        </Container>

    )

}

export default Header