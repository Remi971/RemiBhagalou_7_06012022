import '../styles/Button.css';
import axios from 'axios';

function Button(props) {

    const signup = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/auth/signup', {
            nickname: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        })
            .then((res) => {
                localStorage.setItem("userId", res.data.userId);
                localStorage.setItem("token", `Bearer ${res.data.token}`);
                window.location.href = "http://localhost:3000/forum"
            })
            .catch((err) => console.log(err))
    }

    const login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/auth/login', {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        })
            .then((res) => {
                localStorage.setItem("userId", res.data.userId)
                localStorage.setItem("token", `Bearer ${res.data.token}`);
                window.location.href = "http://localhost:3000/forum"
            })
            .catch((err) => console.log(err))
    }

    return (
        <input id='ButtonStyle' onClick={props.func === 'login' ? login : signup}  className='container--login--form--submit' type='submit' value={ props.func === 'login' ? 'Log in !' : 'Sign up !'}/>
    )
}

export default Button;