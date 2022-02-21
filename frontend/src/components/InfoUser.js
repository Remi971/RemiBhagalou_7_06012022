import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import userImage from '../images/userImage.png';
import { getTime } from '../index';

function InfoUser({ className }) {

    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [nbArticle, setNbArticle] = useState('');

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        axios.get(`http://localhost:8000/api/auth/infoUsers/${userId}`, {
            headers: {
                "authorization": localStorage.getItem('token')
            }
        })
            .then((res) => {
                setNickname(res.data.nickname);
                setEmail(res.data.email);
                setDate(res.data.createdAt);
                setNbArticle(res.data.nbArticle)
            })
            .catch((err) => console.log(err))
    }, []);

    

    return (
        <div className={className}>
            <header>
                <div>
                    <Link to='/forum'><p id='arrow' >⬅️</p></Link>
                    <p>Retour<br/>Forum</p>
                </div>
                <div>
                    <p>LOGO</p>
                </div>
            </header>
            <div id='userInfo'>
                <img src={userImage} alt=''/>
                <p>Nom</p>
                <h1>{nickname}</h1>
                <p>Email</p>
                <h3>{email}</h3>
                <h5>Utilisateur depuis {getTime(date)}</h5>
                <h5>Nombre d'article publié : {nbArticle} </h5>
            </div>
        </div>
    )
}

export default InfoUser;