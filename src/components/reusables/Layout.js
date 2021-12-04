import React from 'react';
import Sidebar from './Sidebar';
import Nav from './Nav';

const Layout = ({children}) => {
    return (
        <div>
            <Sidebar/>
            <Nav/>
            <div>
                {children}    
            </div>              
        </div>
    )
}

export default Layout;
