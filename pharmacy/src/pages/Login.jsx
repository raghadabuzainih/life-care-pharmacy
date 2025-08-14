import users from '../data/users.json'
import '../css/Login.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'

export const Login = ({isLoggin}) => {
    const [cookies, setCookie, removeCookie] = useCookies(["user"])
    const [correctEmail, setCorrectEmail] = useState(true)
    const [correctPassword, setCorrectPassword] = useState(true)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        //check if user exists(authentication)
        if(users.find(user => user.email == email && user.password == password)){
            isLoggin(true)
            setCorrectEmail(true)
            setCorrectPassword(true)
            //store data for 10 minutes
            setCookie("user", JSON.stringify({email, password}), {path: "/", maxAge: 10*60})
            navigate(from, { replace: true })
        }else if(users.find(user => user.email == email)){
            setCorrectEmail(true)
            setCorrectPassword(false)
        }else if(!users.find(user => user.email == email)){
            setCorrectEmail(false)
        }
    }

    useEffect(()=>{
        if(!cookies.user){ //logout
            isLoggin(false)
            navigate('/login')
        }
    }, [cookies, navigate, isLoggin])

    return(
        <form className="login" onSubmit={handleSubmit}>
            <h2>Log in Form</h2>
            <div className="info">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="enter your email" name="email" required />
                    <p style={{display: correctEmail ? 'none' : 'block'}}>incorrect email</p>
                </div>
                <div className="info">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="enter your password" name="password" required />
                    <p style={{display: correctPassword ? 'none' : 'block'}}>incorrect password</p>
                </div>
                <button type="submit">Log in</button>
        </form>
    )
}