import Logo from './Logo';
import Nav from './Nav';

function Header() {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center" style={{ backgroundColor: 'transparent' }}>
            <Nav />
        </header>
    );
}

export default Header;