import styled from 'styled-components';
import ArticleCreation from '../components/ArticleCreation';

export const StyledArticleCreation = styled(ArticleCreation)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background: lightgray;
    border-radius: 10px;
    
    h1 {
        text-align: center;
        font-weight: bold;
        }

    form {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;

        .header {
            position: relative;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            

            img {
                width: 40px;
                margin: 5px;
            }

            input#text {
                width: calc(100% - 55px);
                margin: 5px 0 5px 5px;
            }
        }

        input {
            margin: 5px;
        }

        button {
            border: none;
            border-radius: 5px;
            height: 2.5rem;
            font-size: 1.2rem;
            padding: 10px;
            width: 25%;
            font-size: 0.8rem;
            margin-top: 10px;
            img {
                height: 100%;
            }
        }

        .btn-joindreImage {
            margin-left: 55px;
        }
        #file {
            display: none
        }

        #submit {
            display: none;
        }
    }

    #imageArticle {
        max-height: 200px;
        max-width: 200px;
    }
`