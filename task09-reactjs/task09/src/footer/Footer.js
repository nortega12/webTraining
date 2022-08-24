/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

 import '../scss/Body.scss';

 function Footer() {
   return (
     
    <footer>
    <div class="footer-container">
      <img class="footer-img" src={require("../images/footer.png")} alt="One Piece Logo" />
      <div class="footer-text-container">
        <p class="footer-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit at
          vel congue scelerisque tortor tortor.
        </p>
      </div>
    </div>
  </footer>
     
   );
 }
 
 export default Footer;
 