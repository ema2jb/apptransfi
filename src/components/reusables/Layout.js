import React from 'react';
import Sidebar from './Sidebar';
import Nav from './Nav';
import Transactions from './Transactions'

const Layout = ({children}) => {
    return (
        <div>
            <Sidebar/>
            <Nav/>
            <div>
                {children}    
            </div>
            
            <Transactions />            
        </div>
    )
}

export default Layout;
