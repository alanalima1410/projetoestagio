import React from 'react';
import './header.css';
import viptech from '../imagens/viptech.png'


function Header (){
    return(
        <div className='Header'>
            <img src={viptech} alt="viptech"/>
        </div>
    )
}

export default Header