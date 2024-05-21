//css
//hooks
import { useState } from 'react'
import { Link } from 'react-router-dom'
//components
import TodoList from '../../assets/todoList.png'
const Cadastro = () => {

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
                <form onSubmit={handleSubmit}>
                    <h3 id="authFormTitle">Insira seus dados para se cadastrar</h3>
                    <label for="email">E-mail: </label>
                    <input type="email" placeholder="E-mail" id="email" onChange={(e) => setEmail(e.target.value)}/>
                    <label for="password">Senha: </label>
                    <input type="password" placeholder="Senha" id="password" onChange={(e) => setPassword(e.target.value)}/>
                    <button>Cadastrar</button>
                </form>


                <p id="register">
                    Não possui uma conta?
                    <Link to='/'><button className="alternative">Acessar conta</button></Link>
                </p>


                <p id="access" className="startHidden">
                    Já possui uma conta?
                    <button className=''>Acesse a sua conta</button>
                </p>
            </div>
        </div>
    )
}

export default Cadastro