import styled from 'styled-components';
import Article from '../components/Article';

export const StyledArticle = styled(Article)`
    display: flex;  
    flex-direction: column;  
    width: 90%;
    padding: 15px;
    margin : 5px;
    background: lightpink;
    border-radius: 15px;

    #info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: lightgray;
    border-radius: 20px 0 0 20px;

        & img {
            width: 40px;
            }
    }

    p {
        padding: 5px;
        margin: 10px 0 10px 0;
    }

    .article--img {
        max-width: 100%;
        padding-bottom: 1rem;
    }

    hr {
        margin-bottom: 1rem;
    }
`

