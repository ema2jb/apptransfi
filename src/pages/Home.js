import React from 'react';
import Layout from '../components/reusables/Layout';
import '../styles/Home.css'
import {FaDollarSign} from 'react-icons/fa'
import {AiOutlineSync} from 'react-icons/ai'

const Home = () => {
    return (
        <div>
            <Layout>
            <div className="sectionHeight--short-max ss1">
                <div className="container">
                    <div className="ss2">
                        <div className="row justify-content-center  r1" >
                            <div className="col-md-5  c1">
                                <p className='c1p1'>Overview</p>
                            </div>
                            <div className="col-md-5 c2">
                            <p className='c1p2'>Account ID</p>
                            <p className='mx-2 c1p3'>3451875639</p>
                            </div>
                        </div>
                        <div className="row justify-content-center r2" >
                            <div className="col-md-5 c3">
                                <div className='row  r21'>
                                
                                <img src = '/images/logo1.png' className='tokenIMG mx-3 col-6' alt='' />
                                
                                <div className= 'col-4  px-0'>
                                <p className='c3p1'>Token Balance</p>
                                <p className='c3p2'>0.235 TFI</p>
                                </div>
                                <div className="col-5 spaceBetween" >
                                <AiOutlineSync/> 
                                <p className='sectionText--small '>
                                    Refresh Balance</p>
                                </div>
                                </div>
                                <div className='row r22 mt-5 mb-4 '>
                                    <button className='transparentBtn col-5 mx-3'>Manage Tokens</button>
                                    <button className='defaultBtn col-5'>Buy Tokens</button>
                                </div>
                            </div>
                            <div className="col-md-5 c4">
                            <div className='row  r21'>
                                <span className='col-6 border mx-3 border dollar mAuto'>
                                <FaDollarSign style = {{ color:"white", borderTop:"0px"}} />
                                </span >
                                <div className= 'col-5 px-0'>
                                <p className='c3p1'>Fiat Equivalent</p>
                                <p className='c3p2'>23.00$</p>
                                </div>
                                </div>
                                <div className='row r24 mt-5 mb-2'>
                                    <hr></hr>
                                    <p className="c4p1 textIsBlue">1 TFI=3$</p>
                                </div>

                            </div>
                        </div>
                        <div className='row r3 justify-content-center mt-5'>
                            <div className='col-md-5 c5 pb-5'>
                                <h5 className='mt-4'>Token Sale Progress</h5>
                                <div className='row r31 mt-4'>
                                <div className='col-5'>
                                <p className=''>Raised Amount</p>
                                <p className=''>0.235 TFI</p>
                                </div>
                                <div className='col-6  offset-1'>
                                <p className=''>Token Equivalence</p>
                                <p className=''>0.235 TFI</p>
                                </div>
                                </div>
                            </div>
                            <div className='col-md-5'>
                            <img src='/images/Airdrop_alert.jpg' alt="" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </Layout>
        </div>
    )
}

export default Home;
