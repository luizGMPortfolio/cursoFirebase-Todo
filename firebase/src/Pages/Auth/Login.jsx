//css
import'./Login.css'
//components
import TodoList from '../../assets/todoList.png'
//hooks
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email)
        console.log(password)
        
    }

    return (
        <div className='login'>
            <div className="center">
                <img src={TodoList} alt="" />
            </div>
            <div id="auth" className="center">
                <form action="" onSubmit={handleSubmit}>
                    <h3 id="authFormTitle">Acesse a sua conta para continuar</h3>
                    <label for="email">E-mail: </label>
                    <input type="email" placeholder="E-mail" id="email" onChange={(e) => setEmail(e.target.value)}/>
                    <label for="password">Senha: </label>
                    <input type="password" placeholder="Senha" id="password" onChange={(e) => setPassword(e.target.value)}/>
                    <button>Acessar</button>
                </form>


                <p id="register">
                    Não possui uma conta?
                    <Link to='/cadastro'><button className="alternative">Cadastrar uma nova conta</button></Link>
                </p>


                <p id="access" className="startHidden">
                    Já possui uma conta?
                    <button className=''>Acesse a sua conta</button>
                </p>
            </div>
        </div>
    )
}

export default Login