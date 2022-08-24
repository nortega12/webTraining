/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */
 import '../scss/Body.scss';
   

 function PhotoInfo() {
   return (
        <div className="main-photo-info-container">
            <div className="one-piece-container">
            <img className="img-one-piece-group" src={require("../images/one-piece-group.png")} alt="One Piece Group" />
            <img clas="img-second-logo" id="img-second-logo" src={require("../images/one-piece-logo.png")} alt="One Piece Logo" />
        </div>
        <div className="sinopsis-container">
            <div className="sinopsis-texts-container">
                <h1 className="sinopsis-title">Sinopsis</h1>
                <p className="sinopsis-text">
                Dawn Island is an island located in the East Blue and where the Goa
                Kingdom is situated.<br /><br />
                It is the home island of Monkey D. Luffy and the starting point of
                his journey into piracy, as well as the home island of his father,
                Monkey D. Dragon.
                </p>
                <span style={{display: 'none'}} className="sinopsis-text-two" id="sinopsis-text-two"><br />This is also the adopted home
                of Portgas D. Ace after the
                death of his mother and the home of Sabo and his family.<br />
                <br />Reverse Mountain is an extremely tall mountain at one of the
                points where the four Blues meet and is one of the two known
                entrances to the Grand Line.<br /><br />
                It is located in the Red Line and is the geographical antipode of
                Mary Geoise.</span>
            </div>
            <div className="sinopsis-read-all">
                <span className="icon-angle-down" id="read-all-icon"></span>
                <p type="button" className="read-all-btn" id="read-all-btn" onClick={sinopsisReadAll}>
                Read All
                </p>
            </div>
        </div>
    </div>
     
   );
 }

 function sinopsisReadAll(){
    const moreTextBtn = document.getElementById('read-all-btn');
    const moreText = document.getElementById('sinopsis-text-two');
    const moreTextIcon = document.getElementById('read-all-icon');
    const secondLogo = document.getElementById('img-second-logo');
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        secondLogo.style.display = "block";
        moreTextBtn.innerHTML = "Read Less";
        moreTextIcon.className = "icon-angle-up";

    } else {
        moreText.style.display = "none";
        secondLogo.style.display = "none";
        moreTextBtn.innerHTML = "Read All";
        moreTextIcon.className="icon-angle-down";
    }
 }
 
 export default PhotoInfo;
 