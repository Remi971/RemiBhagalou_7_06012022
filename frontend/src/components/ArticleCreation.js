// import '../styles/ArticleCreation.css';
import { useState } from 'react';
import axios from 'axios';
import userImage from '../images/userImage.png';

function ArticleCreation({className}) {

    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('url', image);
        formData.append('UserId', localStorage.getItem("userId"));
        formData.append('message', message);
        formData.append('alttext', 'test');
        axios({
            method: "post",
            url: "http://localhost:8000/api/forum",
            formData,
            headers: {
                "authorization": localStorage.getItem("token"),
            }
        })
            .then((res) => {
                document.getElementById('text').value = '';
                console.log(res.data, formData);
            })
            .catch((err) => console.log(err))
    }

    const handleFileSelect = (e) => {
        setImage(e.target.files[0])
        console.log(e.target.files);
    }

    const handleChange= (e) => {
        setMessage(e.target.value)
    }

    return (
        <div className={className}>
            <div>
                <img src={userImage} alt='User' />
            </div>
            <form encType='multipart/form-data' onSubmit={onSubmit}>
                <input type='text' name='message' id='text' value={message} onChange={handleChange}/>
                <input type='file' name='image' id='file' accept='image/*' onChange={handleFileSelect} />
                <input type='submit' value='Poster' />
            </form>
            {image && <img src={URL.createObjectURL(image)} alt='' />}
            
            {/* <button onClick={poster}>Poster &gt;</button> */}
        </div>
    )
}

export default ArticleCreation;