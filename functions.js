/*/fetch("https://api.igdb.com/v4/games", {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Accept': 'application/json',
        'Client-ID': 'qp29v6hfynhpxhv45gke6uicsqps05',
        'Authorization': 'Bearer ekqtuxmdwvla6moov6kby6m32vf37z',
    },
    body: {
      data: 'fields name, summary, url; where id = 144800'}

  })
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    }); /*/


async function achievement() {

    const response = await fetch('response.json', {
                    });
            return response.json();
};

achievement()
.then((data => {
    console.log(data) }));
achievement()
    .then((data => {
        function displayGameTitle () {   
                const gameTitle = JSON.stringify(data.playerstats.gameName, null, 2).replace(/[{":,[\]"}]/g, '');
                const gameTitleDiv = document.getElementById("gameTitle");
                const header= document.createElement("h1"); 
                        header.innerHTML = gameTitle;
                        gameTitleDiv.appendChild(header);
                        }  
displayGameTitle() }));
achievement()
.then ((data => {
        function displayAchievements () {
            const achievement = JSON.stringify(data.playerstats.achievements, (key, value) => {
                                 if (key === "unlocktime") {
                                 return undefined
                                } return value }, 2);
            const achievementDiv = document.getElementById("achievement");
            const paragraph = document.createElement("p"); 
                    paragraph.innerHTML = achievement.replace(/[{":,[\]"}]/g, '').replace(/apiname/g, '').replace(/_/g, " ").replace(/unlocktime/g, "Time:").replace(/Achieved 1/gi, "Achieved: <b>Yes</b>").replace(/Achieved 0/gi, "Achieved: <b> No </b>");
                    achievementDiv.appendChild(paragraph);
        }
        displayAchievements();
})); 

window.onload = function() {
    let link = document.createElement("link");
    link.href = "style.css";      /**** your CSS file ****/ 
    link.rel = "stylesheet"; 
    link.type = "text/css"; 
    frames[0].document.head.appendChild(link); /**** 0 is an index of your iframe ****/ 
  }
