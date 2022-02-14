import '../styles/Forum.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledArticleCreation } from '../styles/ArticleCreation.style';
import { StyledArticle } from '../styles/Article.style';
import axios from 'axios';

function Forum() {

    const [articles, setArticles] = useState([]);
    const [isAuth, setIsAuth] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/forum', {
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
            .then(res => {
                setArticles(res.data);
            })
            .catch((err) => {
                setIsAuth(false);
            })
    }, [setArticles])

    return (
        <section>
            {isAuth ? (
                <>
                    <StyledArticleCreation />
                    {articles.map(article => (
                        <StyledArticle 
                            date={article.createdAt} 
                            message={article.message} 
                            srcImage={article.url}
                            altText={article.alttext}
                            articleId={article.id}
                            userId={article.UserId}
                            key={article.id} />
                    ))
                }
                </>
            ) : (
                <>
                    <h1>Vous n'êtes pas authorisés à accéder à cette page !<br/>Veuillez vous connecter </h1>
                    <Link to='/'>Login</Link> 
                </>
                )}
        </section>
    )
}

export default Forum