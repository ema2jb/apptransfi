import React, {useState} from 'react';
import Layout from '../../components/reusables/Layout';
import '../../styles/settings.css';



const Personal = ({changeView}) => {

    const [wallAdd, setWallAdd] = useState('tsrfghHgt6766I')


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
                                <p onClick={changeView} className='isClickable textIsBlue sectionText--midbig'>General Settings</p>
                                <p onClick={changeView} className='isClickable textIsBlue mx-3  border-bottom sectionText--midbig'>Personal Data</p>
                            </div>
                            <div className='row mt-4'>
                            <div className='col-md-6 '>
                                <label className='textIsBlue'>Full Names</label>
                                <input
                                    className='detailsInput'
                                    type='text'
                                    id='amount'
                                    name='amount'
                                    value={wallAdd}
                                    onChange={(e) => setWallAdd(e.target.value)}
                                />
                            </div>
                            <div className='col-md-6'>
                                <label className='textIsBlue'>Email Address</label>
                                <input
                                    className='detailsInput'
                                    type='text'
                                    id='amount'
                                    name='amount'
                                    value={wallAdd}
                                    onChange={(e) => setWallAdd(e.target.value)}
                                />
                            </div>
                            </div>
                            <div className='row mt-5 mb-5'>
                            <div className='col-md-6'>
                                <label className='textIsBlue'>Mobile Number</label>
                                <input
                                    className='detailsInput'
                                    type='text'
                                    id='amount'
                                    name='amount'
                                    value={wallAdd}
                                    onChange={(e) => setWallAdd(e.target.value)}
                                />
                            </div>
                            <div className='col-md-6'>
                                <label className='textIsBlue'>Date of Birth </label>
                                <input
                                    className='detailsInput'
                                    type='text'
                                    id='amount'
                                    name='amount'
                                    value={wallAdd}
                                    onChange={(e) => setWallAdd(e.target.value)}
                                />
                            </div>
                            </div>
                            <div className='payButtonCover mt-5 mb-2 '>
                                <div className='payButton rAlign'>
                                    <button className='transparentBtn col-4 mx-3'>Cancel</button>
                                    <button className='defaultBtn col-4'>Update Data</button>
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

export default Personal;
