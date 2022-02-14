import '../styles/Connect.css';
import { Link } from 'react-router-dom';
import Button from './Button';

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
            <div className='container--login'>
                <Link to={props.how === 'signup' ? '/' : '/signup'}>
                    {props.how === 'signup' ? (
                        <span className="container--login--tosignup login_link">Login in !</span>
                    ) : (
                        <span className="container--login--tosignup signup_link">Sign up !</span>
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
                        <Button func='signup' />
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
                        <Button func='login' />
                    </form>
                )}
                
            </div>
        </section>
    )
}

export default Connect;