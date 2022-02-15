import { useState, useEffect } from 'react';
import userImage from '../images/userImage.png';
import axios from 'axios';

function OneComment({userId, message, commentId}) {

    const [nickName, setNickName] = useState('');
    const [modifMode, setModifMode] = useState(false);
    const [commentaire, setCommentaire] = useState(message);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/auth/infoUsers/${userId}`, {
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
            .then((res) => setNickName(res.data.nickname))
    }, []);

    const modifyCommentfunc = () => {
        setModifMode(false);
        axios.put(`http://localhost:8000/api/comment/${commentId}`, {
            message: commentaire
        }, {
            headers: {
                "authorization": localStorage.getItem("token") 
            }
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }

    const activateModify = () => setModifMode(true);

    const handleChange = (e) => {
        setCommentaire(e.target.value);
    }

    return (
        <li>
            <div>
                <img src={userImage} alt="" />
                <h5>{nickName}</h5>
            </div>
            {modifMode === false ? (<p>{message}</p>) : (
                <>
                    <input id='commentContainer' onChange={handleChange} type='text' value={commentaire} />
                    <button onClick={modifyCommentfunc}>Valider</button>
                </>
            )}
            {parseInt(localStorage.getItem("userId")) === userId & modifMode === false && (<button onClick={activateModify}>Modifier</button>)}
            
        </li>
    )
};

export default OneComment;