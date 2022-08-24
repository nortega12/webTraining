/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary js for Footer component
 */

 import '../scss/Body.scss';

 function Footer() {
   return (
    <footer>
      <div className="footer-container">
        <img className="footer-img" src={require("../images/footer.png")} alt="One Piece Logo" />
        <div className="footer-text-container">
          <p className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit at
            vel congue scelerisque tortor tortor.
          </p>
        </div>
      </div>
  </footer>
     
   );
 }
 
 export default Footer;
 