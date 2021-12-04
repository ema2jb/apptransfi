import React from 'react';
import '../../styles/nav.css';
import {
    AiOutlineIssuesClose, 
    AiOutlineBarChart,
    AiOutlineWallet,
    AiOutlineUserSwitch,
    AiOutlineDollar,
    AiOutlineMessage,
    AiOutlineSetting,
    AiOutlineLogout
    } 
from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <div className="mx-3 sideBarLinks navLink">
                <img src="/images/logo.png" alt="logo"/>
            </div>

            <div className='mt-5'>
                <Link to='/dashboard'>
                <li className='mt-2 mx-3 sideBarLinks navLink'>
                    <AiOutlineBarChart />
                    <p className="sectionText--mid mx-1">DashBoard</p>
                </li>
                </Link>

                <li className='mt-2 mx-3 sideBarLinks navLink '>
                    <AiOutlineWallet />
                    <p className="sectionText--mid mx-1">My Tokens</p>
                </li>

                <Link to='/transactions'>
                <li className='mt-2 mx-3 sideBarLinks  navLink'>
                    <AiOutlineUserSwitch />
                    <p className="sectionText--mid mx-1">Transactions</p>
                </li>
                </Link>

                <li className='mt-2 mx-3 sideBarLinks  navLink'>
                    <AiOutlineIssuesClose />
                    <p className="sectionText--mid mx-1">Dispute Center</p>
                </li>

                <li className='mt-2 mx-3 sideBarLinks  navLink'>
                    <AiOutlineDollar />
                    <p className="sectionText--mid mx-1">Affiliate Earnings</p>
                </li>
            </div>

            <div className='mt-5'>
                <li className='mt-2 mx-3 sideBarLinks  navLink'>
                    <AiOutlineMessage />
                    <p className="sectionText--mid mx-1">Help</p>
                </li>
                <Link to='/settings'>
                <li className='mt-2 mx-3 sideBarLinks  navLink'>
                    <AiOutlineSetting />
                    <p className="sectionText--mid mx-1">Settings</p>
                </li>
                </Link>
                <li className='mt-2 mx-3 sideBarLinks  navLink'>
                    <AiOutlineLogout />
                    <p className="sectionText--mid mx-1">Log out</p>
                </li>
            </div>
        </div>
    )
}

export default Sidebar
