import React, {useState} from 'react';
import '../../styles/Transactions.css'
import {useNavigate } from 'react-router-dom'


const Transactions = ()=>{
    const [transactions] = useState([
        {
            Activity:'Purchase',
            Amount:'$100',
            Status:'Confirmed',
            Date:'21 Sep, 2020',
            id:1
        },
        {
            Activity:'Purchase',
            Amount:'$100',
            Status:'Pending',
            Date:'21 Sep, 2020',
            id:2
        },
        {
            Activity:'Purchase',
            Amount:'$100',
            Status:'Failed',
            Date:'21 Sep, 2020',
            id:3
        },
        {
            Activity:'Purchase',
            Amount:'$100',
            Status:'Confirmed',
            Date:'21 Sep, 2020',
            id:4
        },
        {
            Activity:'Purchase',
            Amount:'$100',
            Status:'Pending',
            Date:'21 Sep, 2020',
            id:5
        },
        {
            Activity:'Purchase',
            Amount:'$100',
            Status:'Failed',
            Date:'21 Sep, 2020',
            id:6
        },
        {
            Activity:'Purchase',
            Amount:'$100',
            Status:'Confirmed',
            Date:'21 Sep, 2020',
            id:7
        }
    ])

        const styledTransactions = transactions.map((transaction)=>{
            if (transaction.Status === 'Confirmed'){
                return {...transaction, background:'#E1FFEB', color:'#00BF3E'}
            } else if (transaction.Status === 'Pending'){
                return {...transaction, background:'#FFF5DC', color:'#F3BA2F'}   
            } 
            return {...transaction, background:'#FEE8E8', color:'#F70000'} 
        })

        const navigate = useNavigate();
        const handleRowClick = (transaction) => {
             navigate(`/summary/${transaction.id}`);
        }  

    return (
        <div className='container con'>
            <div className="row">
                <div className=" col-11 mAuto table-responsive"> 
                <table className="table">
                    <thead>
                        <tr>
                            <th className='vAlign' scope="col">Activity</th>
                            <th className='vAlign' scope="col">Amount</th>
                            <th className='vAlign' scope="col">Status</th>
                            <th className='vAlign' scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            styledTransactions.map(transaction=>( 
                                <tr className='isClickable' onClick={()=>handleRowClick(transaction)}>
                                        <td className='vAlign'>{transaction.Activity}</td>
                                        <td className='vAlign'>{transaction.Amount}</td>
                                        <td className='vAlign' style = {{color:transaction.color, borderRadius:'30px', background:transaction.background}} >{transaction.Status}</td>
                                        <td className='vAlign'>{transaction.Date}</td> 
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
                
            </div>
        </div>
    )
}




export default Transactions



