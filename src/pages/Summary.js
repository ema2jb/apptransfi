import Layout from '../components/reusables/Layout';
import '../styles/settings.css';
import {AiOutlineSwapRight} from 'react-icons/ai'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {AiOutlineSwap} from 'react-icons/ai'
import {AiOutlineFrown} from 'react-icons/ai'


const Summary = () => {


    return (
        <div>
            <Layout>
                <div className="homeLayout">
                    <div className="container">    
                        <div className="row center firstRow" >
                            <p className='textIsBlue sectionText textIsBold col-md-11'>Transaction Summary <AiOutlineInfoCircle style = {{marginLeft:'7px'}}/></p>
                        </div>
                        <div className='row center mt-3'>
                            <div className='col-md-12 personalData'>
                                <p className='textIsLightBlue'>Date Created: <span className='textIsBlue textIsBold'>May 20, 2015</span></p>
                                <hr></hr>
                                <div className='spaceBetween mt-4'>
                                    <p className='textIsLightBlue displayFlex'>Amount:    
                                    <p className='mx-3'><span className='textIsBlue textIsBold'>0.43 BNB</span>  <AiOutlineSwapRight /> <span className='textIsYellow textIsBold'>0.589 TFI</span> </p></p>
                                    <p className="textIsLightBlue textIsBold">BNB/TFI</p>
                                </div>
                                <p className='mt-2 displayFlex textIsLightBlue'>Hash: <p className='mx-5 textIsBlue textIsBold'><span>qwertyuiolkhgfdsazxxcvbnm</span></p></p>
                                <div className='displayFlex mt-4'>
                                    <p className='mt-3 textIsLightBlue'>Wallet:</p>
                                    <div className='mx-4 displayFlex'>
                                    <div className='mx-3'>
                                        <p className='textIsBlue textIsBold'>adghdkkdfrevncmfgd</p>
                                        <p className='textIsLightBlue'>Sender's Address</p>
                                    </div>
                                    <div className='mx-2'>
                                        <AiOutlineSwap 
                                            style={{ 
                                            background:'#023e8a', 
                                            color:'white', 
                                            width:'2rem',
                                            height:'2rem',
                                            fontSize:'1rem',
                                            borderRadius:'50%'
                                        }} />
                                    </div>
                                    <div className='mx-3'>
                                        <p className='textIsBlue textIsBold'>adghdkkdfrevncmfgd</p>
                                        <p className='rAlign textIsLightBlue'>Reciever's Address</p>
                                    </div>
                                    </div>
                                </div>
                                <p className='rAlign mt-5 textIsRed'><AiOutlineFrown /> Dispute Transaction ?</p>
                            </div>
                        </div>
                    </div>
                </div>   
            </Layout>
        </div>
    )
}

export default Summary;
