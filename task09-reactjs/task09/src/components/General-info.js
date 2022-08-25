/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary js for the main-info-container-component
 */

import { useEffect, useState } from 'react';
import '../scss/Body.scss';
   

 function GeneralInfo() {
    const [ info, setInfo ] = useState(null);
    
    const fetchOnePieceInfo = async () => {
        const url = 'https://static.akurey.com/trainings/OnePieceInformation.json';
        try {
             const onePieceInfo = await fetch(url)
             const response = await onePieceInfo.json();

             sortArray(response.islands);
             sortArray(response.characters);
             sortArray(response.mysticObjects);
             setInfo(response);
        } catch(error) {
         alert(error)
        }
     }

    useEffect(()=>{
        fetchOnePieceInfo();
    },[])

   return (
    <div className="main-info-container">
        <form>
        <div className="col-12">
            <div className="input-group w-90 mx-auto">
            <div className="input-group-prepend">
                <span className="input-group-text"><i className="icon-search"></i></span>
            </div>
            <input type="text" className="form-control search-form-control"
                placeholder="Search Characters, Islands or Objects" />
            </div>
        </div>
        </form>
        <div className="main-photos-container">
            <div className="characters-container">
                <div className="titles-container">
                    <p className="section-titles">Characters</p>
                    <a href="/characters" className="see-all-titles">See all</a>
                </div>
                <div className="characters-photo-container" id="characters-photo-container">
                    {info && info.characters.map((item, index)=>(
                            index < 4 && (
                                <div className="characters-photo-item" key={index}>
                                    <div className="photo-filter"></div>
                                    <img src={require(`../images/${item.img}`)} className="characters-photo" alt={item.name} />
                                    <p className="characters-photo-text">{item.name}</p>`;
                                </div>
                            )
                        ))
                    }
                </div>
            </div>
            <div className="islands-container">
                <div className="titles-container">
                    <p className="section-titles">Islands</p>
                    <a href="/islands" className="see-all-titles">See all</a>
                </div>
                <div className="islands-photo-frames" id="islands-photo-frames">
                    {info && info.islands.map((item, index)=>(
                        index < 3 && (
                            <div className="islands-photo-item" key={index}>
                                <img src={require(`../images/${item.img}`)} className="img-island" alt={item.name} />
                                <div className="island-text-frame">
                                    <p className="island-title">{item.name}</p>
                                    <div className="island-location">
                                    <i className="icon-map-marker"></i>
                                    <p className="island-text">{item.Location}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
            <div className="mist-obj-container">
                
                <div className="titles-container">
                    <p className="section-titles">Mist Objects</p>
                    <a href="/mist-objects" className="see-all-titles">See all</a>
                </div>
                    <div className="mist-obj-scroll">
                        <div className="objects-photo-container" id="object-photo-container">
                        {info && info.mysticObjects.map((item, index) => (
                            index < 4 && (
                                <div className="objects-photo-item" key={index} >
                                    <img src={require("../images/mist-object.png")} className="obj-img" alt="Mystic Object" />
                                    <div className="object-text-frame">
                                        <p className="mist-obj-title">{item.name}</p>
                                        <p className="mist-obj-text">{item.description}</p>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
   );
 }

 function sortArray(array){
    array.sort((a,b) => {
        let a1 = a.name.toLowerCase(),
            b1 = b.name.toLowerCase();
    
        if (a1 < b1) {
            return -1;
        }
        if (a1 > b1) {
            return 1;
        }
        return 0;
    });
}

 export default GeneralInfo;
 