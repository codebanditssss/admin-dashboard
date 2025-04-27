import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import './header.css';

function Header({ onOpenCompleteProfile }) {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center header fixed  bg-white" style={{ backgroundColor: 'transparent' }}>
            <Nav onOpenCompleteProfile={onOpenCompleteProfile} />
        </header>
    );
}

export default Header;