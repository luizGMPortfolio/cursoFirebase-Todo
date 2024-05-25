//css
import './Auth.css'
//components
import TodoList from '../../assets/todoList.png'
import Modal from '../../components/Modal'
//hooks
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";



const Login = () => {

    //useStates
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState('');
    const [resetPassword, setresetPassword] = useState('hide')
    //useAuth
    const { login, GoogleLogin, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            email,
            password,
        }

        const res = await login(user)
        console.log(res);

    }
    const handleEmail = () => {
        setresetPassword('visible')
    }
    useEffect(() => {
        if (authError) {
            setError(authError)
        }

    }, [authError])

    return (
        <div className='login'>
            <Modal resetPassword={resetPassword} setresetPassword={setresetPassword} />
            <div className="center">
                <img src={TodoList} alt="" />
            </div>
            <div id="auth" className="center">
                <form action="" onSubmit={handleSubmit}>
                    <h3 id="authFormTitle">Acesse a sua conta para continuar</h3>
                    <label for="email">E-mail: </label>
                    <input type="email" placeholder="E-mail" id="email" onChange={(e) => setEmail(e.target.value)} />
                    <label for="password">Senha: </label>
                    <input type="password" placeholder="Senha" id="password" onChange={(e) => setPassword(e.target.value)} />
                    {!loading &&
                        <button>Acessar</button>
                    }
                    {loading &&
                        <button className='btn' disabled>Aguarde...</button>

                    }
                    {error && <p className='error'>{error}</p>}

                </form>

                <p>
                    Esqueceu a senha?
                    <button className="alternative" onClick={handleEmail}>Redefinir senha</button>
                </p>
                <p id="register">
                    Não possui uma conta?
                    <Link to='/cadastro'><button className="alternative">Cadastrar uma nova conta</button></Link>
                </p>

                <div>
                    <hr />
                    <p>ou</p>
                    <div className='alterLogins'>
                        <li onClick={GoogleLogin}><FcGoogle /></li>
                        <li><BiLogoFacebookSquare /></li>
                        <li><FaGithub /></li>
                        
                        
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login