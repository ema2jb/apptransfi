import React, {useState} from 'react';
import '../../styles/nav.css';
import {AiOutlineCopy}from 'react-icons/ai'

const Nav = () => {
    const [wallAdd] = useState('1jh2jhbv5kjn6')
    const [initial] = useState('DE')


    return (
        <div className='nav'>
            <div className='navHead'>
            <p className='navh4'><AiOutlineCopy /></p>
            <p className='navh4'>{wallAdd}</p>
            <div className='navp'>
            <p>{initial}</p>
            </div>
            </div>
           
        </div>
    )
}

export default Nav
