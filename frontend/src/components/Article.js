import userImage from '../images/userImage.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleComment } from '../styles/Comment.style';
import { getTime } from '../index';

function Article({ date, message, srcImage, atlText, articleId, userId, className}) {

    const [userNickname, setUserNickname] = useState('');
    const [comment, setComment] = useState(false);
    const [modifyActive, setModifyActive] = useState(false);
    const [newMessage, setNewMessage] = useState(message);
    const [image, setImage] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/auth/infoUsers/${userId}`, {
            headers: {
                "authorization": localStorage.getItem('token')
            }
        })
            .then((res) => {
                setUserNickname(res.data.nickname);
            })
    }, [])

    const commenter = () => {
        setComment(!comment)
    }

    const modifyArticle = () => {
        setModifyActive(true);
    }

    const validModif = (e) => {
        e.preventDefault();
        setModifyActive(false);
        const formData = new FormData();
        formData.append('message', newMessage);
        if (image) {
            formData.append('alttext', image.name);
            formData.append('image', image);
        }
        axios.put(`http://localhost:8000/api/forum/${articleId}`, formData, {
            headers : {
                "authorization": localStorage.getItem("token")
            }
        })
            .then((res) => {
                window.location.reload();
            })
    }

    const handleFileSelect = (e) => {
        setImage(e.target.files[0])
    }

    const handleChange= (e) => {
        setNewMessage(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();//Sinon onSubmit se lance avant d'avoir sélectionné l'image
        document.getElementById('modifFile').click()
    }

    const deleteArticle = () => {
        const confirm = window.confirm('Êtes vous sûre de vouloir supprimé cette article?');
        confirm && axios.delete(`http://localhost:8000/api/forum/${articleId}`, {
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
            .then((res) => {
                console.log(res.data);
                window.location.reload();
            })
    }

    return (
        <article className={className}>
            <div id='info'>
                <img src={userImage} alt='user' />
                <div>
                    <h4>{userNickname}</h4>
                    <p>Il y a {getTime(date)}</p>
                </div>
            </div>
            {modifyActive ? (
                <form onSubmit={validModif}>
                    <input type='text' name='message' id='textModify' value={newMessage} onChange={handleChange}/>
                    <button className='btn' onClick={handleClick}>Joindre une nouvelle image</button>
                    <input className='btn' type='file' name='image' id='modifFile' accept='image/*' onChange={handleFileSelect} />
                    <input className='validModif btn' type='submit' value='Valider' />
                    <button className='btn'>Annuler</button>
                </form>
            ) : (<p id='message'>{message}</p>)}
            { srcImage !== null & image === null && <img className='article--img' src={srcImage} alt={atlText} />}
            <p id='nbCommentaires'>X Commentaires</p>
            <hr id='line'/>
            { image && <img className='article--img' src={URL.createObjectURL(image)} alt={image.name} />}
            <div>
                <div>
                    <button onClick={commenter}><i class="fa-solid fa-comment-dots"></i> Commentaires</button>
                    {articleId === parseInt(localStorage.getItem("userId")) && (<button>modifier</button>)
                    }
                </div>
                {parseInt(localStorage.getItem("userId")) === userId && (
                    <div>
                    {modifyActive === false && (
                        <button onClick={modifyArticle}><i class="fa-solid fa-pen-to-square"></i> Modifier</button>
                    )}
                    <button onClick={deleteArticle}><i class="fa-solid fa-trash"></i> Supprimer</button>
                    </div>
                )}
            </div>
            <hr id='line'/>
            { comment && (<StyleComment article_Id={articleId} nickname={userNickname} key={'comment' + articleId} />) }
        </article>
    )
} 

export default Article;