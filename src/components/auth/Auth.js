import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import './Auth.css'

const Auth = () => {
    const dispatch = useDispatch();

    const [values, setValues] = useState({ email: '', password: '' });

    const fetchToAuth = () => (
        fetch('/api/v1/auth/token/login/', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: { "content-type": "application/json" }
        })
    )

    return (
        <div className="auth">
            <input
                placeholder="e-mail"
                type={'email'}
                onChange={e => setValues({ ...values, email: e.target.value })}
                value={values.email}>
            </input>
            <input
                placeholder="пароль"
                onChange={e => setValues({ ...values, password: e.target.value })}
                value={values.password}>
            </input>
            <button
                onClick={fetchToAuth}>Войти</button>
            <Link className="link" to={'/registration'}>Зарегистрироваться</Link>

        </div>
    )
}

export default Auth