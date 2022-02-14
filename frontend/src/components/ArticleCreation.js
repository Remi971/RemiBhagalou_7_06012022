// import '../styles/ArticleCreation.css';
import { useState } from 'react';
import axios from 'axios';
import userImage from '../images/userImage.png';

function ArticleCreation({className}) {

    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    const poster = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: "http://localhost:8000/api/forum",
            data: {
                message: message, 
                UserId: localStorage.getItem("userId"), 
                url: image,
                alttext: 'test'
                },
            headers: {
                "authorization": localStorage.getItem("token"),
                //"Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                document.getElementById('text').value = '';
                console.log(res.data);
            })
            .catch((err) => console.log(err))
    }

    const handleFileSelect = (e) => {
        setImage(e.target.files)
        console.log(e.target.files)
    }

    const handleChange= (e) => {
        setMessage(e.target.value)
    }

    return (
        <div className={className}>
            <div>
                <img src={userImage} alt='User' />
            </div>
            <form onSubmit={poster} encType='multipart/form-data'>
                <input type='text' name='text' id='text' value={message} onChange={handleChange}/>
                <input type='file' name='image' id='file' accept='image/*' onChange={handleFileSelect} />
                <input type='submit' value='Poster' />
            </form>
            {image && <img src={URL.createObjectURL(image[0])} alt={image[0].name} />}
            
            {/* <button onClick={poster}>Poster &gt;</button> */}
        </div>
    )
}

export default ArticleCreation;