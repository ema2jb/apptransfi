import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../../components/reusables/Spinner';
import {register} from '../../redux/actions/authActions';
import InputField from '../../components/reusables/InputField';
import '../../styles/auth.css';

const Signup = () => {

        const [isLoading,
        setIsLoading] = useState(false);

    const [formData,
        setFormData] = useState({first_name: '', last_name: '', email: '', password: '', phone: ''});

    const [hidePassword,
        setHide] = useState(true);

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
        register(formData);
           handleLoading();
    }

    const {email, password, first_name, last_name, phone} = formData;

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

                                        <div className="alignOnly formHead textIsGray mt-3">
                                            <hr/>
                                            <span className='mx-2 vAlign sectionText--small'>Sign Up with Email</span>
                                            <hr/>
                                        </div>

                                        <form className='w-100' onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className='mt-4'>
                                                        <InputField placeholder='First Name' name='first_name' value={first_name} change={handleChange}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className='mt-4'>
                                                        <InputField placeholder='Last Name' name='last_name' value={last_name} change={handleChange}/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='mt-4'>
                                                <InputField
                                                    type='email'
                                                    placeholder='Email'
                                                    name='email'
                                                    value={email}
                                                    change={handleChange}/>
                                            </div>

                                            <div className='mt-4'>
                                                <InputField
                                                    placeholder='Phone'
                                                    name='phone'
                                                    value={phone}
                                                    change={handleChange}/>
                                            </div>

                                            <div className="mt-4">
                                                <InputField
                                                    placeholder='Password'
                                                    type={hidePassword
                                                    ? 'password'
                                                    : 'text'}
                                                    name='password'
                                                    value={password}
                                                    change={handleChange}
                                                    icon
                                                    iconAction={() => setHide(!hidePassword)}
                                                    iconClass={hidePassword
                                                    ? 'fas fa-eye'
                                                    : 'fas fa-eye-slash'}/>

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
                                            : <button className='defaultBtn w-100' type='submit'> Sign up
                                                <i className="fas fa-arrow-right mx-2"></i>
                                            </button>}

                                            </div>

                                            <div className="mt-4 sectionText--mid vAlign textIsGray">
                                                <p className='textIsGray'>Already have an account?
                                                    <Link to='/login' className='textIsBlue textIsBold mx-1'>Sign In</Link>
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

export default Signup
