/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary js for the header component
 */

import '../scss/Body.scss';
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
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="/">Home<span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/characters">Characters</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/islands">Islands</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/mist-objects">Mist Objects</a>
                </li>
              </ul>
              <div className="flags-container">
                <div className="flag-item">
                  <p className="flag-text">English</p>
                  <img className="flag-img" src={require("../images/usa-flag.png")} alt="USA Flag" />
                </div>
                <div className="flag-item">
                  <p className="flag-text">Spanish</p>
                  <img className="flag-img" src={require("../images/spain-flag.png")} alt="Spain Flag" />
                </div>
              </div>
            </div>
        </nav>
      </header>
    
  );
}

export default Header;
