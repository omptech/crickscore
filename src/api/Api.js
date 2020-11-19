const API_KEY = 'Y4RIa6rPIKaKsLFMOcdRy1RlVeZ2';

export const getMatches=()=> {
    const url='https://cricapi.com/api/matches?apikey=Y4RIa6rPIKaKsLFMOcdRy1RlVeZ2';

    return fetch(url)
    .then((respone) => respone.json())
    .catch((error)=>console.log("Error ",error));
};

//Load match details
export const getMatchDetail=(id)=> {
    const url=`http://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;

    return fetch(url)
    .then((respone) => respone.json())
    .catch((error)=>console.log("Error ",error));
};
