import users from '../data/users.json'
import '../css/Login.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Login = ({isLoggin}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        //check if user exists(authentication) & password is not empty
        if(users.find(user => user.email == email) && password){
            isLoggin(true)
            navigate(from, { replace: true })
        }
    }

    useEffect(()=>{
        const timer = setTimeout(()=> {
            isLoggin(false)
        }, 10*60*1000) //after 10 minutes

        return () => clearTimeout(timer)
    }, [isLoggin])

    return(
        <form className="login" onSubmit={handleSubmit}>
            <h1>Log in Form</h1>
            <div className="info">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="enter your email" name="email" required />
                </div>
                <div className="info">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="enter your password" name="password" required />
                </div>
                <button type="submit">Log in</button>
        </form>
    )
}