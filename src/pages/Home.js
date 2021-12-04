import React from 'react';
import Layout from '../components/reusables/Layout';
import '../styles/Home.css'
import {FaDollarSign} from 'react-icons/fa'
import {AiOutlineSync} from 'react-icons/ai'
import Transactions from '../components/reusables/Transactions'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'



const Home = () => {
    return (
        <div>
            <Layout>
            <div className="homeLayout">
                <div className="container">    
                        <div className="row center firstRow" >
                            <p className='overview col-md-5'>Overview</p>
                            <p className='accountID col-md-5'>Account ID <span className='mx-2 c1p3'>3451875639</span></p>
                        </div>
                        <div className="row center secondRow" >
                            <div className="col-md-5 tokenDetails">
                                <div className='row  tokenDetail1'>   
                                <img src = '/images/logo1.png' className='tokenIMG mx-3 col-6' alt='' />
                                <div className= 'col-4  px-0'>
                                <p className='currency'>Token Balance</p>
                                <p className='currencyDigits'>0.235 TFI</p>
                                </div>
                                <div className="col-5" >
                                <AiOutlineSync style = {{ marginRight:'7px'}}/> 
                                <span className='sectionText--small '>
                                    Refresh Balance</span>
                                </div>
                                </div>
                                <div className='row mt-5 mb-4 '>
                                    <button className='transparentBtn col-5 mx-3'>Manage Tokens</button>
                                    <Link className='defaultBtn vAlign col-5' to='/buytoken'>Buy Tokens</Link>
                                </div>
                            </div>
                            <div className="col-md-5 mapBg">
                            <div className='displayFlex tokenDetail1'>
                                <span>
                                    <FaDollarSign 
                                    style = {{ 
                                        fontSize:"50px", 
                                        borderRadius:"50%",
                                        padding:"10px", 
                                        background:"#023e8a", 
                                        color:"white", 
                                        borderTop:"0px",
                                        marginRight:"5px"
                                            }} 
                                    />
                                </span >
                                <div className= 'mx-2'>
                                <p className='currency'>Fiat Equivalent</p>
                                <p className='currencyDigits'>23.00$</p>
                                </div>
                                </div>
                                <div className='row rAlign mt-5 mb-2'>
                                    <hr></hr>
                                    <p className="tfiToDollar textIsBlue">1 TFI=3$</p>
                                </div>

                            </div>
                        </div>
                        <div className='row r3 justify-content-center mt-5'>
                            <div className='col-md-5 mapLight pb-5'>
                                <h5 className='mt-4'>Token Sale Progress</h5>
                                <div className='row  mt-4'>
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
                        <div className='row center mt-5'>
                            <h4 style={{paddingLeft:'5px'}} className='col-10  h4'>Recent Transactions</h4>
                            <p className='col-1'>
                            <BsFillArrowRightSquareFill style={{fontSize:'2rem', background:"white", color:'#023E8A'}} />
                            </p>    
                        </div>
                        <Transactions /> 
                    </div>
                </div>   
            </Layout>
        </div>
    )
}

export default Home;
