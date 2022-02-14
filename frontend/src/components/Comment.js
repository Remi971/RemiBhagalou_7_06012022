import { useEffect, useState } from 'react';
import axios from 'axios';
import OneComment from './OneComment';

function Comment({article_Id, className}) {

    const [listComment, setListComment] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/comment/${article_Id}`, {
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
            .then((res) => {
                setListComment(res.data)})
            .catch((err) => console.log(`articleId : ${article_Id}, Problème serveur ! : ${err}`))
    }, [])

    const posterComment = () => {
        axios.post("http://localhost:8000/api/comment", {
            message: document.getElementById("textComment").value,
            ArticleId : article_Id,
            UserId: localStorage.getItem("userId")
        }, {
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
            .then((res) => {
                document.getElementById("textComment").value = '';
                console.log(res.data)
                setListComment(res.data);
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={className}>
            <ul>
                {listComment.length > 0 &&
                    listComment.map(comment => (
                        <OneComment key={'comment'+comment.id} commentId={comment.id} userId={comment.UserId} message={comment.message} />
                    ))
                }
            </ul>
            <div className="postCommentaire">
                <input type='text' name='text' id='textComment' />
                <button onClick={posterComment} >Poster</button>
            </div>
        </div>
    )
}

export default Comment;