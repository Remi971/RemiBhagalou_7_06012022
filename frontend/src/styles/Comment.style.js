import styled from 'styled-components';
import Comment from '../components/Comment'

export const StyleComment = styled(Comment)`
    width: 100%;
    li {
        list-style: none;
        display: flex;
        align-items: center;
    }
    img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
`