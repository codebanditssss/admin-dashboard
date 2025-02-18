import Logo from './Logo';
import Nav from './Nav';
import './header.css';

function Header() {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center header fixed  bg-white" style={{ backgroundColor: 'transparent' }}>
            <Nav/>
        </header>
    );
}

export default Header;