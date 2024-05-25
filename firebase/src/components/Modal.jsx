//css
import './Modal.css'
//hooks
import { useState } from 'react'
import { useAuthentication } from '../hooks/useAuthentication'

const Modal = ({ resetPassword, setresetPassword }) => {

  const [email, setEmail] = useState();
  const { ResetPassword } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault();
    ResetPassword(email)
    setresetPassword('hide')
  }
  console.log(email)
  return (
    <div className={`Modal ${resetPassword}`}>
      <div className='container'>
        <p>Para redefinir a senha, por favor informe seu email</p>
        <form onSubmit={handleSubmit}>
        <input type='email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
        <button>enviar</button>
        </form>

      </div>
    </div>
  )
}

export default Modal