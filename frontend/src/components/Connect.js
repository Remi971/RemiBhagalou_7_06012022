import { Link } from 'react-router-dom';
import { StyledButton } from '../styles/Button.style';

function Connect({ how, className}) {

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
        <section className={className}>
            <div className='container'>
                <Link className='switch' to={how === 'signup' ? '/' : '/signup'}>
                    {how === 'signup' ? (
                        <span className="container--login--tosignup login_link">Login in !</span>
                    ) : (
                        <span className="container--login--tosignup signup_link">Sign up !</span>
                    )}
                </Link>
                
                {how === 'signup' ? (
                    
                    <form>
                        <p>Sign up</p>
                        <div className='container--login--formPart'>
                            <i className="fa-solid fa-user"></i>
                            <input type='text' name='name' id='name' placeholder='nickname' onChange={handleChange} />
                        </div>
                        <div className='container--login--formPart'>
                            <i className="fa-solid fa-at"></i>
                            <input type='email' name='email' id='email' placeholder='email' />
                        </div>
                        <div className='container--login--formPart'>
                            <i className="fa-solid fa-lock"></i>
                            <input type='password' name='password' id='password' placeholder='password' />
                        </div>
                        <div className='container--login--formPart'>
                            <i className="fa-solid fa-lock"></i>
                            <input type='password' name='password' id='passwordAgain' placeholder='confirm password' />
                        </div>
                        <StyledButton func='signup' />
                    </form>
                
                ) : (
                    <form>
                        <p>Log in</p>
                        <div className='container--login--formPart'>
                            <i className="fa-solid fa-at"></i>
                            <input type='email' name='email' id='email' placeholder='email' />
                        </div>
                        <div className='container--login--formPart'>
                            <i className="fa-solid fa-lock"></i>
                            <input type='password' name='password' id='password' placeholder='password' />
                        </div>
                        <StyledButton func='login' />
                    </form>
                )}
                
            </div>
        </section>
    )
}

export default Connect;