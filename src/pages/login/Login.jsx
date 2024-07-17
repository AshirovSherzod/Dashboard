import React, { useEffect, useState } from 'react'

import './login.scss'
import { useSignInMutation } from '../../context/customerApi'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const [username, setUserName] = useState("SherzodAshirov")
    const [password, setPassword] = useState("31040607")
    const [signIn, { data, isSuccess }] = useSignInMutation()
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('x-auth-token')) navigate("/admin/customer")

    }, [isSuccess])

    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = {
            username,
            password
        }
        signIn(formData)
        console.log(data);
        localStorage.setItem('x-auth-token', data.innerData.token)
    }


    return (
        <div className="login">
            <h1>Welcome to <br /> this <span>website</span></h1>
            <form onSubmit={handleSubmit} action="">
                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder='Username' />
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                <button type='submit'>Log in</button>
            </form>
        </div>
    )
}

export default Login