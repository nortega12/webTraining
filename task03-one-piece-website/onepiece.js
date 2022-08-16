/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary js with the read all function of the sinopsis section
 */

function readAll(){
    let moreText = document.getElementById('sinopsis-text-two');
    let moreTextBtn = document.getElementById('read-all-btn');
    let moreTextIcon = document.getElementById('read-all-icon');
    let secondLogo = document.getElementById('img-second-logo');
    if(moreText.style.display === "none"){
        moreText.style.display = "inline";
        secondLogo.style.display = "block";
        moreTextBtn.innerHTML = "Read Less";
        moreTextIcon.className="icon-angle-up";

    }else{
        moreText.style.display = "none";
        secondLogo.style.display = "none";
        moreTextBtn.innerHTML = "Read All";
        moreTextIcon.className="icon-angle-down";
    }
}

