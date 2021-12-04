import React, {useState} from 'react';
import Layout from '../components/reusables/Layout';
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineDown} from 'react-icons/ai'
import '../styles/AllTransactions.css'
import Transactions from '../components/reusables/Transactions'


const AllTransactions = ({changeView}) => {

    const [search, setSearch] = useState('')

    return (
        <div>
            <Layout>
                <div className="homeLayout">
                    <div className="container">    
                        <div className="row center firstRow" >
                            <p className='overview col-md-11'>All Transactions</p>
                        </div>
                        <div className='row center mt-3'>
                            <div className='col-md-12 personalData'>
                            <div className='spaceBetween'>
                            <div className='searchInput'>
                                <AiOutlineSearch style={{fontSize:'25px'}} />
                                <input
                                    type='text'
                                    id='amount'
                                    name='amount'
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                                <p className='textIsBlue'>Filter Search <AiOutlineDown /></p>
                            </div>
                            </div>
                            <Transactions />
                        </div>
                       
                    </div>
                </div>   
            </Layout>
        </div>
    )
}

export default AllTransactions;
