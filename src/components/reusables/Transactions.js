import React, {useState} from 'react';
import '../../styles/Transactions.css'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'


const Transactions = ()=>{
    const [transactions, setTransactions] = useState([
        {
            Activity:'Purchase',
            Amount:'$100',
            Status:'Confirmed',
            Date:'21 Sep, 2020'
        },
        {
            Activity:'Purchase',
            Amount:'$100',
            Status:'Confirmed',
            Date:'21 Sep, 2020'
        },
        {
            Activity:'Purchase',
            Amount:'$100',
            Status:'Confirmed',
            Date:'21 Sep, 2020'
        },
        {
            Activity:'Purchase',
            Amount:'$100',
            Status:'Confirmed',
            Date:'21 Sep, 2020'
        },
        {
            Activity:'Purchase',
            Amount:'$100',
            Status:'Confirmed',
            Date:'21 Sep, 2020'
        },
        {
            Activity:'Purchase',
            Amount:'$100',
            Status:'Confirmed',
            Date:'21 Sep, 2020'
        },
        {
            Activity:'Purchase',
            Amount:'$100',
            Status:'Confirmed',
            Date:'21 Sep, 2020'
        },
    ])


    return (
        <div className='container con'>
            <div className='row mb-3'>
                <h4 className='col-11 h4'>Recent Transactions</h4>
                <p className='col-1'>
                <BsFillArrowRightSquareFill style={{fontSize:'2rem', background:"white", color:'#023E8A'}} />
                </p>
                
            </div>
             <div className="row">
                <div className="table-responsive"> 
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Activity</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions.map(transaction=>(
                                <tr>
                                    <td>{transaction.Activity}</td>
                                    <td>{transaction.Amount}</td>
                                    <td>{transaction.Status}</td>
                                    <td>{transaction.Date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div></div>
        </div>
    )
}




export default Transactions



