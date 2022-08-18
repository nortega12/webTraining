/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary js with the read all function of the sinopsis section
 */

function readAll() {
    const moreText = document.getElementById('sinopsis-text-two');
    const moreTextBtn = document.getElementById('read-all-btn');
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

// let objContainer = document.getElementById('object-photo-container');

// for (let i=0; i<4; i++) {
    
//     let objItem = document.createElement('div');
//     objItem.setAttribute("class","objects-photo-item");
//     objContainer.appendChild(objItem);
//     if ( i == 3){
//         objItem.setAttribute("id","last-obj-item");
//     }
//     let objTextFrame = document.createElement('div');
//     objTextFrame.setAttribute("class","object-text-frame");
//     objItem.appendChild(objTextFrame);

//     let objTitle = document.createElement('p');
//     objTitle.setAttribute("class","mist-obj-title");
//     objTitle.innerHTML = "Gomu Gomu No Mi";
//     objTextFrame.appendChild(objTitle);

//     let objText = document.createElement('p');
//     objText.setAttribute("class","mist-obj-text");
//     objText.innerHTML = "Is a Paramecia-type Devil Fruit that gives the user's body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by the series protagonist, Monkey D. Luffy.";
//     objTextFrame.appendChild(objText);
// }

// let islandContainer = document.getElementById("islands-photo-frames");

// for (let i = 0; i<3; i++){
//     let islandItem = document.createElement('div');
//     islandItem.setAttribute("class","islands-photo-item");
//     islandContainer.appendChild(islandItem);

//     let islandTextFrame = document.createElement('div');
//     islandTextFrame.setAttribute("class","island-text-frame");
//     islandItem.appendChild(islandTextFrame);

//     let islandTitle = document.createElement('p');
//     islandTitle.setAttribute("class","island-title");
//     islandTextFrame.appendChild(islandTitle);

//     let islandLocation = document.createElement('div');
//     islandLocation.setAttribute("class","island-location");
//     islandTextFrame.appendChild(islandLocation);
    
//     let islandIcon = document.createElement('i');
//     islandIcon.setAttribute("class","icon-map-marker");
//     islandLocation.appendChild(islandIcon);

//     let islandText = document.createElement('p');
//     islandText.setAttribute("class","island-text");
//     islandLocation.appendChild(islandText);


//     if (i == 0) {
//         islandItem.setAttribute("id","img-goa");
//         islandTitle.innerHTML = "Dawn Island";
//         islandText.innerHTML = "East Blue";
//     } else {
//         islandItem.setAttribute("id","img-reverse");
//         islandTitle.innerHTML = "Reverse Mountain";
//         islandText.innerHTML = "Red Line";
//     }
// }