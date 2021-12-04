import React, {useState} from 'react';
import Layout from '../components/reusables/Layout';
import '../styles/buyToken.css'
import {AiOutlineSync} from 'react-icons/ai'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {AiOutlineMinusCircle} from 'react-icons/ai'
import {AiOutlineSwap} from 'react-icons/ai'



const BuyToken = () => {

    const [bnb, setBnb] = useState(0.43)
    const [tfi, setTfi] = useState(0.589)
    const [wallAdd, setWallAdd] = useState('tsrfghHgt6766I')


    return (
        <div>
            <Layout>
            <div className="homeLayout">
                <div className="container">    
                        <div className="row center firstRow" >
                            <p className='overview col-md-5'>Buy Token</p>
                            <p className='accountID col-md-5'>Account ID <span className='mx-2 c1p3'>3451875639</span></p>
                        </div>
                        <div className="row center  secondRow" >
                            <div className="col-md-5 mapLight tokenDetails">
                                <div className='row noPad bnbAmount'>   
                                    <div className='col-5'>
                                        <p className='textIsLightBlue sectionText--midbig mb-3'>Amount</p>
                                        <input
                                            className='formInput'
                                            type='number'
                                            id='amount'
                                            name='amount'
                                            value={bnb}
                                            onChange={(e) => setBnb(e.target.value)}
                                        />
                                    </div>
                                    <div className='col-7'>
                                        <p className='textIsLightBlue sectionText--midbig mb-4'>Payment Method</p>
                                        <img src = '/images/logo1.png' className='tokenIMG' alt='' />
                                        <span>BNB</span>
                                    </div>
                                </div>
                                <div className='mb-3 mt-3'>
                                    <hr></hr>
                                    <AiOutlineSync style = {{color:'#023E8A', marginRight:'7px'}}/>
                                    <span className='sectionText--small textIsBlue'>Rates Refresh Automatically</span>                              
                                </div>
                            </div>
                            <AiOutlineSwap 
                                style={{
                                    position:'absolute', 
                                    background:'#023e8a', 
                                    color:'white', 
                                    width:'3rem',
                                    height:'3rem',
                                    fontSize:'2rem',
                                    borderRadius:'50%'
                                    }} />
                            <div className="col-md-5 transfiSection">
                            <div className='row noPad bnbAmount'>             
                                        <p className='textIsLightBlue sectionText--midbig mb-3'>What you will get</p>
                                    <div className='row'>
                                        <div className='col-6'>
                                        <input
                                            className='formInput'
                                            type='number'
                                            id='amount'
                                            name='amount'
                                            value={tfi}
                                            onChange={(e) => setTfi(e.target.value)}
                                        />
                                        </div>
                                        <div className='col-6 mt-2'>
                                        <img src = '/images/logo1.png' className='tokenIMG' alt='' />
                                        <span>TFI</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='rAlign mt-3 mb-3'>
                                    <hr></hr>
                                    <p className="tfiToDollar textIsBlue">1 TFI=3$</p>
                                </div>
                            </div>
                        </div>
                    
                        <div className='row  center thirdRow'>
                            <div className='col-md-10 paymentSection'>
                            <div className='spaceBetween'>
                                <p className='textIsBlue textIsBold sectionText'>Wallet Address</p>
                                <span className='textIsBlue textIsBold sectionText'>Learn more<AiOutlineInfoCircle style = {{marginLeft:'7px'}}/></span>
                            </div>
                            <p className='textIsLightBlue sectionText--mid mt-2'>Enter the wallet address of selected payment method</p>
                            <div className='displayFlex'>
                            <div className='addInput'>
                                <input
                                    className=''
                                    type='text'
                                    id='amount'
                                    name='amount'
                                    value={wallAdd}
                                    onChange={(e) => setWallAdd(e.target.value)}
                                />
                                <AiOutlineMinusCircle/>
                            </div>
                            <p className='mx-2 textIsBlue textIsBold sectionText-midbig'>Change Address</p>
                            </div>
                            <p className='textIsLightBlue mt-3'>
                                 {<span className='textIsBlue textIsBold sectionText'>{`${bnb} BNB`}</span>} will be deducted from your wallet addres
                            </p>
                            <div className='payButtonCover mt-5 mb-2 '>
                                <div className='payButton rAlign'>
                                    <button className='transparentBtn col-5 mx-3'>Cancel</button>
                                    <button className='defaultBtn col-5'>Proceed To Pay</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </Layout>
        </div>
    )
}

export default BuyToken;
