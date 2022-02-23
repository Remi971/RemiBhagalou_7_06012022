import styled from 'styled-components';
import Connect from '../components/Connect';

export const StyledConnect = styled(Connect)`
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(0deg, rgba(251,251,251,1) 0%, rgba(135,135,135,1) 100%);


    .container {
        width: 100%;
        background: lightgray;
        border: 2px solid white;
        border-radius: 10px;
        padding: 1rem;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; 

        .switch {
            position: absolute;
            top: 2rem;
            right: 2rem;
            padding: 0.5rem;
            background: lightgray;
            border-radius: 15px;
            width: 100px;
            text-align: center;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        }

        form {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            
            p {
                position: relative;
                margin: 0 auto;
                top: -2.5rem;
                text-align: center;
                padding: 0.5rem;
                background: lightcyan;
                border-radius: 10px;
                border: 2px lightblue solid;
                width: 120px;
            }

            div {
                display: flex;
                justify-content: flex-start;
                margin-bottom: 1rem;
                background: white;
                border-radius: 10px;
                padding: 0.5rem;

                i {
                    font-size: 1.5rem;
                    border-right: 1px black solid;
                    padding: 10px;
                    text-align: center;
                }

                input {
                    border: none;
                    margin-left: 5px;
                    padding: 10px;
                    width: max-content;
                    display: inline-block;
                    font-size: 1rem;
                    background-color: transparent;

                    &:focus {
                        border-left: 1 yellow solid;
                    }
                }

            }

            #ButtonStyle {
                width: 100%;
            }
        }

    }
`