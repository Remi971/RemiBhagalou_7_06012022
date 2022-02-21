import styled from 'styled-components';
import InfoUser from '../components/InfoUser';

export const StyledInfoUser = styled(InfoUser)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 1rem;
        background: lightgray;

        div {
            display: flex;
            justify-content: center;
            align-items: space-between;

            p {
                margin: 1rem;
            }
            #arrow {
                font-size: 2rem;

                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }

    #userInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        gap: 0.5rem;
        height: 100%;

        img {
            max-width: 200px;
            max-height: 200px;
            margin: 1rem;
        }

        p, h5 {
            margin-top: 1rem;
        }
    }
`