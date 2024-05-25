//css
import './Home.css'
//hooks
import { useAuthValue } from '../../context/AuthContext'
import { useAuthentication } from '../../hooks/useAuthentication';
import { FaUserCircle } from "react-icons/fa";


const Home = () => {

    const { user } = useAuthValue();
    const { Verifyemail } = useAuthentication();

    console.log(user)

    if (!user.emailVerified) {
        return (
            <div className='Home'>
                <p>Bem vindo, antes de comerçarmos precisamos verificar seu email</p>
                <span>Email: {user.email}</span>
                <span>Status: {user.emailVerified ? 'verificado' : 'Não verificado'}</span>
                <button onClick={Verifyemail}>Verificar email</button>
            </div>
        )
    }
    return (
        <div className='Home'>
            Home
            <img src={user.photoURL ? user.photoURL : <FaUserCircle />} alt="" />
            <span>{user.displayName}</span>
            <span>{user.email}</span>
        </div>
    )
}

export default Home