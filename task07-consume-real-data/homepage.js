/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary js of the home page
 */
import {fetchOnePieceData} from './json-data.js';

"use strict";

let OnePieceInformation;

window.onload = async () => {
    OnePieceInformation = await fetchOnePieceData();
    fillMysticObjects();
    fillIslands();
    fillCharacters();
};

const moreTextBtn = document.getElementById('read-all-btn');
moreTextBtn.addEventListener("click",function(){
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
});

function fillMysticObjects(){
    let objContainer = document.getElementById('object-photo-container');

    for (let i=0; i<4; i++) {
        let objItem = document.createElement('div');
        objItem.setAttribute("class","objects-photo-item");
        objItem.innerHTML =
        `<img src="../images/mist-object.png" class="obj-img">
            <div class="object-text-frame">
                <p class="mist-obj-title">${OnePieceInformation.mysticObjects[i].name}</p>
                <p class="mist-obj-text">${OnePieceInformation.mysticObjects[i].description}</p>
            </div>`;
        if ( i == 3) {
            objItem.setAttribute("id","last-obj-item");
        }
        objContainer.appendChild(objItem);
    }
}

function fillIslands(){
    let islandContainer = document.getElementById("islands-photo-frames");

    for (let i = 0; i<3; i++){

        let islandItem = document.createElement('div');
        islandItem.setAttribute("class","islands-photo-item");

        islandItem.innerHTML = 
        `<img src="../images/${OnePieceInformation.islands[i].img}" class="img-island">
        <div class="island-text-frame">
          <p class="island-title">${OnePieceInformation.islands[i].name}</p>
          <div class="island-location">
            <i class="icon-map-marker"></i>
            <p class="island-text">${OnePieceInformation.islands[i].Location}</p>
          </div>
        </div>`;

        islandContainer.appendChild(islandItem);
    }
}

function fillCharacters(){
    let charContainer = document.getElementById("characters-photo-container");

    for (let i = 0; i<4; i++){

        let charItem = document.createElement('div');
        charItem.setAttribute("class","characters-photo-item");

        charItem.innerHTML = 
        `<div class="photo-filter"></div>
        <img src="../images/${OnePieceInformation.characters[i].img}" class="characters-photo">
        <p class="characters-photo-text">${OnePieceInformation.characters[i].name}</p>`;

        charContainer.appendChild(charItem);
    }
}