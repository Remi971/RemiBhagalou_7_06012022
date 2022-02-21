import styled from 'styled-components';
import Article from '../components/Article';

export const StyledArticle = styled(Article)`
    display: flex;  
    flex-direction: column;  
    width: 100%;
    padding: 15px;
    margin : 5px;
    background: lightgray;
    border-radius: 10px;

    #info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: lightgray;

    img {
        width: 40px;
        margin-right: 10px;
    }
    div {
        display:flex;
        flex-direction: column;
        align-items: flex-start;

        p {
            padding: 0;
            }
        }
    
    }

    form {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        /* width: 100%; */
        padding: 5px;
        gap: 5px;

        #modifFile {
            display: none;
        }

        .btn {
            width: 100px; 
            height: 55px;
            padding: 5px;
            border: none;
            border-radius: 15px;
            box-shadow: 2px 2px 2px black;

            &:hover {
                background: lightgray;
            }
        }

        #textModify{
            width: 100%;
        }
    }

    .article--img {
        max-width: 100%;
    }

    #nbCommentaires {
        text-align: right;
    }

    div {
        display: flex;
        justify-content: space-between;
    }

    #line {
        margin: 5px 0;
    }

`

