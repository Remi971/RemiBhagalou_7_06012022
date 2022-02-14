import styled from 'styled-components';
import ArticleCreation from '../components/ArticleCreation';

export const StyledArticleCreation = styled(ArticleCreation)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 5px;

    img {
        height: 50px;
    }

    button {
        padding: 5px;
    }
`