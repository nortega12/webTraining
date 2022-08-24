import '../scss/Header.scss';
import NavbarList from './NavbarList';
function Header() {
  return (
    
      <header>
        <nav className={`navbar fixed-top navbar-expand-xl navbar-light bg-white py-4 justify-content-center`}>
          <button className='navbar-toggler burger-menu' type='button' data-toggle="collapse" data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span id="burger-icon" className="icon-align-left"></span>
            <span id="burger-icon" className="icon-times"></span>
          </button>
          <div className="logo">
            <img className="one-piece-logo" src={require("../images/one-piece-logo.png")} alt="One Piece Logo" />
          </div>
          <NavbarList />
        </nav>
      </header>
    
  );
}

export default Header;
