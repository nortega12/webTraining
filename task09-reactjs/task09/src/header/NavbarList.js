/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

 import '../scss/Header.scss';

 function NavbarList() {
    return (
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
    );
  }
  
  export default NavbarList;
  