import React from 'react';

function Login(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onLogin({email, password});

        setEmail('');
        setPassword('');
    }

    return (
        <section className="login-page">
            <h2 className="login-page__title">Вход</h2>
            <form className="form" name="login" onSubmit={handleSubmit}>
                <div className="form__section">
                    <label className="form__label"></label>
                    <input type="email" className="form__item form__item_type_login-page form__item_type_email"
                           id="email" name="email" placeholder="Email" required minLength="2" maxLength="40"
                           value={email || ''} onChange={handleChangeEmail}/>
                    <span className="form__input-error" id="email-error"></span>
                </div>
                <div className="form__section">
                    <label className="form__label"></label>
                    <input type="password" className="form__item form__item_type_login-page form__item_type_password"
                           id="password" name="password" placeholder="Пароль" required minLength="5" maxLength="15"
                           value={password || ''} onChange={handleChangePassword}/>
                    <span className="form__input-error" id="password-error"></span>
                </div>
                <button type="submit" className="form__button form__button_type_login-page">Войти</button>
            </form>

        </section>
    );
}

export default Login;