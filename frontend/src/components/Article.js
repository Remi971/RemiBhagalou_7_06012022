import userImage from '../images/userImage.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleComment } from '../styles/Comment.style';

function Article({ date, message, srcImage, atlText, articleId, userId, className}) {

    const [userNickname, setUserNickname] = useState('');
    const [comment, setComment] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/auth/infoUsers/${userId}`)
            .then((res) => {
                setUserNickname(res.data.nickname);
            })
    }, [])

    const commenter = () => {
        setComment(!comment)
    }

    return (
        <article className={className}>
            <div id='info'>
                <img src={userImage} alt='user' />
                <h4>{userNickname}</h4>
                <p>{date}</p>
            </div>
            <p>
                {message}
            </p>
            { srcImage | srcImage !== 'null' && <img className='article--img' src={srcImage} alt={atlText} />}
            <hr/>
            <div>
                <button onClick={commenter}>Commentaires</button>
                {articleId === parseInt(localStorage.getItem("userId")) && (<button>modifier</button>)
                }
            </div>
            { comment && (<StyleComment article_Id={articleId} nickname={userNickname} key={'comment' + articleId} />) }
        </article>
    )
} 

export default Article;