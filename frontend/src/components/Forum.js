import '../styles/Forum.css';
import { useState, useEffect } from 'react';
import userImage from '../images/userImage.png';
import exitImage from '../images/exit.png';
import imageTest from '../images/office.jpg';

const userArticle = {
    user: 'Auteur',
    message: 'Exemple de plublication avec du contenu multimédia, ici une image',
    srcImage: imageTest,
    altText: 'alt Text',
    date: 'il y a 4h'
}

function Forum() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/forum/')
            .then(res => res.json())
            .then(data => {
                setArticles(articles + data);
                console.log(articles);
            })
    }, [])

    return (
        <section>
            <div className='articleContainer'>
                <article className='articleContainer__article'>
                    <div className='article--user'>
                        <img src={userImage} alt='user' />
                        <h4>{userArticle.user}</h4>
                        <p>{userArticle.date}</p>
                    </div>
                    <p className='article--message'>
                        {userArticle.message}
                    </p>
                    <img className='article--img' src={userArticle.srcImage} alt={userArticle.atlText} />
                    <div className='article__comment'>
                        <h3>Commentaires</h3>
                        <div className='article__comment--comment'>
                            <img src={userImage} alt='user' />

                        </div>
                    </div>
                </article>
            </div>
            <aside className='profile'>
                <img className='profile--imgUser' src={userImage} alt='user' />
                <img className='profile--imgExit' src={exitImage} alt='exit' />
            </aside>
        </section>
    )
}

export default Forum