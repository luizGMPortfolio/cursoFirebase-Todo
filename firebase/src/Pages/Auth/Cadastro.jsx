//css
import './Auth.css'
//hooks
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuthentication } from '../../hooks/useAuthentication'
//components
import TodoList from '../../assets/todoList.png'
const Cadastro = () => {

    //useStates
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState('');
    //useAuth
    const { createUser, loading, error: authError, Verifyemail} = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("");

        const user = {
            email,
            password,
        }

        try {

            const res = await createUser(user)
            console.log(user)

        } catch (error) {
            console.log(error);
            setError(error.message);
        }

    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }

    }, [authError])

    return (
        <div className='login'>
            <div className="center">
                <img src={TodoList} alt="" />
            </div>
            <div id="auth" className="center">
                <form onSubmit={handleSubmit}>
                    <h3 id="authFormTitle">Insira seus dados para se cadastrar</h3>
                    <label for="email">E-mail: </label>
                    <input type="email" placeholder="E-mail" id="email" onChange={(e) => setEmail(e.target.value)} />
                    <label for="password">Senha: </label>
                    <input type="password" placeholder="Senha" id="password" onChange={(e) => setPassword(e.target.value)} />
                    {!loading &&
                        <button>Cadastrar</button>
                    }
                    {loading &&
                        <button className='btn' disabled>Aguarde...</button>

                    }
                    {error && <p className='error'>{error}</p>}
                </form>


                <p id="register">
                    Não possui uma conta?
                    <Link to='/'><button className="alternative">Acessar conta</button></Link>
                </p>


            </div>
        </div>
    )
}

export default Cadastro