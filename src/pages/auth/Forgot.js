import React, {useState} from 'react';
import { recoverPassword } from '../../redux/actions/authActions';
import InputField from '../../components/reusables/InputField';
import '../../styles/auth.css';

const Login = () => {

    const [email,
        setEmail] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            recoverPassword(email);
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

                                        <div className="vAlign">
                                            <p className="sectionText--mid textIsGray pb-3">A reset link will be sent to the provided email</p>
                                        </div>

                                        <form className='mt- w-100' onSubmit={handleSubmit}>
                                            <div>
                                                <InputField
                                                    placeholder='Email'
                                                    name='email'
                                                    value={email}
                                                    change={(e) => setEmail(e.target.value)}/>
                                            </div>

                                         
                                            <div className="pt-5">
                                                <button type="submit" className='w-100 defaultBtn'>Send Reset Link</button>
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
