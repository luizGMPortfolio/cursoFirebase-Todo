//css
import './Logout.css'
//hooks
import { useAuthentication } from '../hooks/useAuthentication'

const logout = () => {
    const { logout } = useAuthentication()
    return (
        <button className='logout' onClick={logout}>Logout</button>
    )
}

export default logout