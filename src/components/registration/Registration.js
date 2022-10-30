import React, { useState } from "react";

import './Registration.css';

const Registration = () => {

    const [values, setValues] = useState({
        nick_name: '',
        email: '',
        password: ''
    });

    const fetchToRegistration = () => (
        fetch('/api/v1/auth/users/', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: { "content-type": "application/json" }
        })
    )

    return (
        <div className="registration">
            <h2>Регистрация</h2>
            <div className="input_registration required">
                <h4><sup>*</sup>ФИО:</h4>
                <input>
                </input>
            </div>
            <div className="input_registration required">
                <h4><sup>*</sup>Дата рождения:</h4>
                <input>
                </input>
            </div>
            <div className="input_registration required">
                <h4><sup>*</sup>Страна:</h4>
                <input>
                </input>
            </div>
            <div className="input_registration required">
                <h4><sup>*</sup>Гражданство:</h4>
                <input>
                </input>
            </div>
            <div className="input_registration required">
                <h4><sup>*</sup>Пол:</h4>
                <input>
                </input>
            </div>
            <div className="input_registration required">
                <h4><sup>*</sup>nick_name:</h4>
                <input
                    onChange={e => setValues({ ...values, nick_name: e.target.value })}
                    value={values.nick_name}>
                </input>
            </div><div className="input_registration required">
                <h4><sup>*</sup>password:</h4>
                <input
                    onChange={e => setValues({ ...values, password: e.target.value })}
                    value={values.password}>
                </input>
            </div>
            <div className="input_registration required">
                <h4><sup>*</sup>E-mail:</h4>
                <input
                    onChange={e => setValues({ ...values, email: e.target.value })}
                    value={values.email}>
                </input>
            </div>
            <input type={'checkbox'}></input>Получать дополнительные уведомления
            <div className="input_registration additional">
                <h4>Образование:</h4>
                <input>
                </input>
            </div>
            <div className="input_registration additional">
                <h4>Занятость:</h4>
                <input>
                </input>
            </div>
            <div className="input_registration additional">
                <h4>Опыт работы:</h4>
                <input>
                </input>
            </div>
            <div className="input_registration additional">
                <h4>Достижения/профессиональный опыт:</h4>
                <input>
                </input>
            </div>
            <div className="input_registration additional">
                <h4>Направление:</h4>
                <input>
                </input>
            </div>
            <div className="input_registration additional">
                <h4>Навыки:</h4>
                <input>
                </input>
            </div>
            <div className="input_registration additional">
                <h4>Роль:</h4>
                <input>
                </input>
            </div>
            <div className="input_registration additional">
                <h4>Наличие команды:</h4>
                <input>
                </input>
            </div>
            <div className="input_registration additional">
                <h4>Статус:</h4>
                <input>
                </input>
            </div>
            <button
                onClick={fetchToRegistration}>Зарегестрироваться</button>
        </div>
    )
}

export default Registration