/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

 import { useEffect, useState } from 'react';
import '../scss/Body.scss';
   

 function GeneralInfo() {
    const [ info, setInfo ] = useState(null);
    
    const fetchOnePieceInfo = async () => {
        try{
             const onePieceInfo = await fetch('https://static.akurey.com/trainings/OnePieceInformation.json')
             .then((response)=> response.json());
             console.log(onePieceInfo);

             sortArray(onePieceInfo.islands);
             sortArray(onePieceInfo.characters);
             sortArray(onePieceInfo.mysticObjects);
             setInfo(await onePieceInfo);
        } catch (error){
         alert(error)
        }
     }

    useEffect(()=>{
        
        fetchOnePieceInfo();
        // fetch('https://static.akurey.com/trainings/OnePieceInformation.json')
        // .then(res => {
        //     return res.json();
        // })
        // .then( data => {
        //     setInfo(data);
        // })
    },[])

    

   return (
    <div class="main-info-container">
        <form>
        <div class="col-12">
            <div class="input-group w-90 mx-auto">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="icon-search"></i></span>
            </div>
            <input type="text" class="form-control search-form-control"
                placeholder="Search Characters, Islands or Objects" />
            </div>
        </div>
        </form>
        <div class="main-photos-container">
            <div class="characters-container">
                <div class="titles-container">
                    <p class="section-titles">Characters</p>
                    <a href="/characters" class="see-all-titles">See all</a>
                </div>
                <div class="characters-photo-container" id="characters-photo-container">
                </div>
            </div>
            <div class="islands-container">
                <div class="titles-container">
                    <p class="section-titles">Islands</p>
                    <a href="/islands" class="see-all-titles">See all</a>
                </div>
                <div class="islands-photo-frames" id="islands-photo-frames">
                </div>
            </div>
            <div class="mist-obj-container">
                <div class="titles-container">
                    <p class="section-titles">Mist Objects</p>
                    <a href="/mist-objects" class="see-all-titles">See all</a>
                </div>
                <div class="objects-photo-container" id="object-photo-container">
                  <ul>
                   {info && console.log(info.islands) }
                  </ul>
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
 