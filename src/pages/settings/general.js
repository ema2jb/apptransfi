import Layout from '../../components/reusables/Layout';
import '../../styles/settings.css';
import {AiOutlinePlus} from 'react-icons/ai'


const General = ({changeView}) => {



    return (
        <div>
            <Layout>
                <div className="homeLayout">
                    <div className="container">    
                        <div className="row center firstRow" >
                            <p className='overview col-md-11'>Account Settings</p>
                        </div>
                        <div className='row center mt-3'>
                            <div className='col-md-12 personalData'>
                                <div className='displayFlex'>
                                    <p onClick={changeView} className='isClickable textIsBlue border-bottom sectionText--midbig'>General Settings</p>
                                    <p onClick={changeView} className='isClickable textIsBlue mx-3 sectionText--midbig'>Personal Data</p>
                                </div>
                                <div className='spaceBetween mt-4'>
                                    <p className='textIsLightBlue'>Add Wallet Address</p>
                                    <p><AiOutlinePlus style={{fontSize:'25px', color:"#ffffff", background:"#023e8a"}}/></p>
                                </div>
                                <div className='spaceBetween  mt-4'>
                                    <p className='textIsLightBlue'>Set up a Four (4) digit password</p>
                                    <p><AiOutlinePlus style={{fontSize:'25px', color:"#ffffff", background:"#023e8a"}} /></p>
                                </div>
                                <div className='spaceBetween  mt-4'>
                                    <p className='textIsLightBlue'>Want a new password?</p>
                                    <button className='transparentBtn textIsBlue'>Change Password</button>
                                </div>
                            </div>
                        </div>
                        <hr className='textIsLightBlue'></hr>
                        <div className='row center mt-3'>
                            <div style={{background:'#fBfBfB'}} className='col-md-12 personalData'>
                                <p style={{background:'#f4f4f4', padding:'10px'}} className='textIsBlue' >Two-Factor Verification?</p>
                                <p className='textIsLightBlue  mt-5'>We strongly recommend enabling two factor verifiation for your account</p>
                                <p className='textIsLightBlue mt-5'>Sends you a one time passcode that are compliant with all major athentication
                                apps including Google Authenticator, Authy, Duo</p>
                                <div className='rAlign mt-5'>
                                    <button className='transparentBtn textIsBlue'>Enable Two-Factor Verification</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </Layout>
        </div>
    )
}

export default General;
