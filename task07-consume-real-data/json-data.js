/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary js with json related functions
 */

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

export async function fetchOnePieceData(){
    const OnePieceUrl = 'https://static.akurey.com/trainings/OnePieceInformation.json';
    
    try {
        let onePieceInfo = await fetch(OnePieceUrl)
        .then( (response) => response.json());
        sortArray(onePieceInfo.islands);
        sortArray(onePieceInfo.characters);
        sortArray(onePieceInfo.mysticObjects);

        return await onePieceInfo;
    } catch (error) {
        alert(error);
    }
}