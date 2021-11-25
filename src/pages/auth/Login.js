import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../../components/reusables/Spinner';
import InputField from '../../components/reusables/InputField';
import { login } from '../../redux/actions/authActions';
import '../../styles/auth.css';

const Login = () => {

         const [isLoading,
        setIsLoading] = useState(false);

    const [formData,
        setFormData] = useState({email: '', password: ''});

        const [hidePassword, setHide] = useState(true);

    const {email, password} = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

       const handleLoading = () => {
        setIsLoading(true);

        setInterval(() => {
            setIsLoading(false)
        }, 6000)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData);
        handleLoading();
    }

    return (
        <div>
            <div className="" style-={{
                height: '100vh'
            }}>
                <div className="row">
                    <div className="col-lg-6 noPad">
                        <div className="textHolder fullHeight alignOnly">
                            <div className="container">
                                <img src="/images/logo.png" className='logo' alt=""/>

                                <div className="sectionHeight--mid mt-3 alignOnly">

                                    <div className="w-100">
                                
                                        <div className="alignOnly formHead textIsGray mt-3 mb-4">
                                            <hr /> <span className='mx-3 vAlign sectionText--small'>Login with Email</span> <hr />
                                        </div>

                                        <form className='mt- w-100' onSubmit={handleSubmit}>
                                            <div>
                                                <InputField
                                                    placeholder='Email'
                                                    name='email'
                                                    value={email}
                                                    change={handleChange}/>
                                            </div>

                                            <div className="mt-4">
                                                <InputField
                                                    placeholder='Password'
                                                    type={hidePassword ? 'password' : 'text'}
                                                    name='password'
                                                    value={password}
                                                    change={handleChange}
                                                    icon
                                                    iconAction={() => setHide(!hidePassword)}
                                                    iconClass={ hidePassword ?  'fas fa-eye' : 'fas fa-eye-slash' }/>

                                                <div className="rAlign sectionText--mid mt-3">
                                                    <Link to='/forgot' className='textIsBlue'>Forgot Password?</Link>
                                                </div>

                                            </div>

                                            <div className="pt-5">
                                                <div className="alignOnly sectionText--mid mb-4">
                                                    <input type="checkbox" className='checkbox isClickable' name="" id=""/>
                                                    <span className='mx-2 textIsGray'>Keep me logged In</span>
                                                </div>

                                                {isLoading
                                            ? <button disabled className='defaultBtn center w-100'>Please Wait {''}{''}
                                                    <Spinner/>
                                                </button>
                                            : <button className='defaultBtn w-100' type='submit'> Login
                                                <i className="fas fa-arrow-right mx-2"></i>
                                            </button>}

                                            </div>

                                            <div className="mt-4 sectionText--mid vAlign textIsGray">
                                                <p className='textIsGray'>Don’t have an account?
                                                    <Link to='/' className='textIsBlue textIsBold mx-1'>Sign up</Link>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 noPad alignOnly fullHeight fullHeight--mobile">
                        <div className="imgHolder ">
                            <img src="/images/login.png" className='w-100' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
