import '../styles/Connect.css'
import LogoName from '../images/icon-left-font-monochrome-white.svg'
import { Link } from 'react-router-dom'

function Connect(props) {

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                console.log('Vérifier que le nom renseigné respecte le type de caractère');
                break;
            case 'email':
                break;
            case 'password':
                if (e.target.value === ' '){
                    console.log('Attention valeur interdite')
                }
                break;
            default:
                console.log('Pas besoin de vérif');
        }
    }

    return (
        <section className='container'>
            <div className='article_creation'>
                
            </div>
            <div className='container--login'>
                <Link to={props.how === 'signup' ? '/' : '/signup'}>
                    {props.how === 'signup' ? (
                        <div className="container--login--tosignup login_link"><span>Login in !</span></div>
                    ) : (
                        <div className="container--login--tosignup signup_link"><span>Sign up !</span></div>
                    )}
                </Link>
                
                {props.how === 'signup' ? (
                    <form className='container--login--form'>
                        <div className='container--login--formPart'>
                            <label>nickname</label>
                            <input type='text' name='name' id='name' onChange={handleChange} />
                        </div>
                        <div className='container--login--formPart'>
                            <label>email</label>
                            <input type='email' name='email' id='email' />
                        </div>
                        <div className='container--login--formPart'>
                            <label>password</label>
                            <input type='password' name='password' id='password' />
                        </div>
                        <div className='container--login--formPart'>
                            <label>confirm password</label>
                            <input type='password' name='password' id='passwordAgain' />
                        </div>
                        <input className='container--login--form--submit' type='submit' value='Sign up !'/>
                    </form>
                
                ) : (
                    <form className='container--login--form'>
                        <div className='container--login--formPart'>
                            <label>email</label>
                            <input type='email' name='email' id='email' />
                        </div>
                        <div className='container--login--formPart'>
                            <label>password</label>
                            <input type='password' name='password' id='password' />
                        </div>
                        <input className='container--login--form--submit' type='submit' value='Log in !'/>
                    </form>
                )}
                
            </div>
            <div className='container--info'>
                <img className='container--info--image' src={LogoName} alt='logo' />
                <div className='container--info--block'>
                    {props.how === 'signup' ? (
                        <>
                            <h2>Sign up</h2>
                            <p className='container--info--p'>Bienvenu dans la communauté Groupomania<br/><br />Ici vous pouvez poster des articles ou images et commenter les posts de vos collègues.</p>
                        </>
                    ) : (
                        <>
                            <h2>Log in</h2>
                            <p className='container--info--p'>Bienvenu dans la communauté Groupomania<br/><br />Ici vous pouvez poster des articles ou images et commenter les posts de vos collègues.</p>
                        </>
                    )}
                </div>
                <div className='container--info--bg'></div>
                
            </div>

        </section>
    )
}

export default Connect