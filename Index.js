//          ACC - MOGA6 TSAR
//      puuid - WNqXWV_wD-1GkAfaxSkCbWW5ItB8UXgfCaWsVots0eEPCf7wqS60fM60fAasSO4zfb9Foi0XAPU2Cg
//      summonerID - 66uMAA-K-mfNx99tKcWyR-3P0mFdCB0Whq24IpBw95o1N14
//      accountID - KBWbUr2neWaDosVgA6p47FMAzsTcvRT-MQIqMTUwJKEcb2o
const profileName = document.getElementsByClassName("card-title")[0];
const flexRank = document.getElementById("flqRank");
const soloRank = document.getElementById("sqRank");
const soloLP = document.getElementById("sqLP");
const flexLP = document.getElementById("flqLP");
const soloQWins = document.getElementById("slqWins");
const soloQLosses = document.getElementById("slqLosses");
const soloQWR = document.getElementById("slqWR");
const flexQWins = document.getElementById("flqWins");
const flexQLosses = document.getElementById("flqLosses");
const flexQWR = document.getElementById("flqWR");

const profileNameS = document.getElementById("nameHolderS");
const flexRankS = document.getElementById("flqRankS");
const soloRankS = document.getElementById("sqRankS");
const soloLPS = document.getElementById("sqLPS");
const flexLPS = document.getElementById("flqLPS");
const soloQWinsS = document.getElementById("slqWinsS");
const soloQLossesS = document.getElementById("slqLossesS");
const soloQWRS = document.getElementById("slqWRS");
const flexQWinsS = document.getElementById("flqWinsS");
const flexQLossesS = document.getElementById("flqLossesS");
const flexQWRS = document.getElementById("flqWRS");





// const xhr = new XMLHttpRequest();
//
// xhr.open("GET","https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/MOGA6%20TSAR/TSAR?api_key=RGAPI-8c93ed88-3c9f-403c-ac15-50e7778705b4")
//
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         const response = JSON.parse(xhr.responseText);
//         console.log(response.status);
//     }
// }
// xhr.send();
//  info за акаунта име, таг, puuid
fetch(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/MOGA6%20TSAR/TSAR?api_key=RGAPI-c9b4a69c-93ff-4591-87cc-dde44a585c44`)
    .then((res) => res.json())
    .then ((data) => {
        console.log(data);
        profileName.innerHTML = data.gameName;
    })
    .catch((err) => console.log(err));
// Stelko
fetch(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-puuid/IAzrrG-MK7iraOnkwf95JfgCSuYaMb4Qy5GOumBXtDa0qisPigXChlJ9WzLeGsyBwcpyvDqH2aKdDA?api_key=RGAPI-c9b4a69c-93ff-4591-87cc-dde44a585c44`)
    .then((res) => res.json())
    .then ((data) => {
        console.log(data);
        profileNameS.innerHTML = data.gameName;
    })
    .catch((err) => console.log(err));

//  ранковете на флекс и соло
fetch(`https://eun1.api.riotgames.com/lol/league/v4/entries/by-puuid/WNqXWV_wD-1GkAfaxSkCbWW5ItB8UXgfCaWsVots0eEPCf7wqS60fM60fAasSO4zfb9Foi0XAPU2Cg?api_key=RGAPI-c9b4a69c-93ff-4591-87cc-dde44a585c44`)
    .then((res) => res.json())
    .then((data) => {console.log(data);
    getRankMe(data);
    getStatsMe(data);
    })
    .catch((err) => console.log(err));

// Stelko
fetch(`https://eun1.api.riotgames.com/lol/league/v4/entries/by-puuid/IAzrrG-MK7iraOnkwf95JfgCSuYaMb4Qy5GOumBXtDa0qisPigXChlJ9WzLeGsyBwcpyvDqH2aKdDA?api_key=RGAPI-c9b4a69c-93ff-4591-87cc-dde44a585c44`)
    .then((res) => res.json())
    .then((data) => {console.log(data);
        getRankStelko(data);
        getStatsStelko(data);})
    .catch((err) => console.log(err));


// fetch(`https://eun1.api.riotgames.com/lol/summoner/v4/summoners/66uMAA-K-mfNx99tKcWyR-3P0mFdCB0Whq24IpBw95o1N14?api_key=RGAPI-c9b4a69c-93ff-4591-87cc-dde44a585c44`)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

//  Втори начин да достъпя
//const nameHolder = document.getElementById("nameHolder");
//nameHolder.innerHTML = "Hello";

function getRankMe(data){
    let soloIndex = data[0].queueType === "RANKED_SOLO_5x5" ? 0 : 1;
    let flexIndex = soloIndex === 0 ? 1 : 0;

    let soloData = data[soloIndex];
    let flexData = data[flexIndex];

    soloRank.innerHTML += soloData.tier + " " + soloData.rank;
    soloLP.innerHTML += soloData.leaguePoints;
    flexRank.innerHTML += flexData.tier + " " + flexData.rank;
    flexLP.innerHTML += flexData.leaguePoints;

}
function getRankStelko(data){
    let flexIndex = data[0].queueType === "RANKED_FLEX_SR" ? 0 : 1;
    let soloIndex = flexIndex === 0 ? 1 : 0;

    let soloData = data[soloIndex];
    let flexData = data[flexIndex];

    if(data.length === 1 || flexData === 0){
        flexRankS.innerHTML += flexData.tier + " " + flexData.rank;
        flexLPS.innerHTML += flexData.leaguePoints;
        soloRankS.innerHTML += "Unranked"
    }
    else{
        soloRankS.innerHTML += soloData.tier + " " + soloData.rank;
        soloLPS.innerHTML += soloData.leaguePoints;
        flexRankS.innerHTML += flexData.tier + " " + flexData.rank;
        flexLPS.innerHTML += flexData.leaguePoints;
    }

}

function getStatsMe(data){
    let soloIndex = data[0].queueType === "RANKED_SOLO_5x5" ? 0 : 1;
    let flexIndex = soloIndex === 0 ? 1 : 0;

    let soloData = data[soloIndex];
    let flexData = data[flexIndex];

    soloQWins.innerHTML = "Wins: " + soloData.wins;
    soloQLosses.innerHTML = "Losses: " + soloData.losses;
    soloQWR.innerHTML = "WR: " + Math.round((soloData.wins / (soloData.wins + soloData.losses)) * 100).toFixed(1) + "%";

    flexQWins.innerHTML = "Wins: " + flexData.wins;
    flexQLosses.innerHTML = "Losses: " + flexData.losses;
    flexQWR.innerHTML = "WR: " + Math.round((flexData.wins / (flexData.wins + flexData.losses)) * 100).toFixed(1) + "%";

}
function getStatsStelko(data){
    let flexIndex = data[0].queueType === "RANKED_FLEX_SR" ? 0 : 1;
    let soloIndex = flexIndex === 0 ? 1 : 0;

    let soloData = data[soloIndex];
    let flexData = data[flexIndex];

    if(data.length === 1 || flexData === 0){
        flexQWinsS.innerHTML = "Wins: " + flexData.wins;
        flexQLossesS.innerHTML = "Losses: " + flexData.losses;
        flexQWRS.innerHTML = "WR: " + Math.round((flexData.wins / (flexData.wins + flexData.losses)) * 100).toFixed(1) + "%";

    }
    else{
        soloQWinsS.innerHTML = "Wins: " + soloData.wins;
        soloQLossesS.innerHTML = "Losses: " + soloData.losses;
        soloQWRS.innerHTML = "WR: " + Math.round((soloData.wins / (soloData.wins + soloData.losses)) * 100).toFixed(1) + "%";

        flexQWinsS.innerHTML = "Wins: " + flexData.wins;
        flexQLossesS.innerHTML = "Losses: " + flexData.losses;
        flexQWRS.innerHTML = "WR: " + Math.round((flexData.wins / (flexData.wins + flexData.losses)) * 100).toFixed(1) + "%";

    }

    // Teauisda sdyasd
    // аоисуда осдаю
    //дасдас
}
