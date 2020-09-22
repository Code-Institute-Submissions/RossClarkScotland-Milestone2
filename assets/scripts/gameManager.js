let gameManager = {
    setGameStart: function(classType) {
        this.setPlayer(classType);
        this.setPreFight();
    },

    setPlayer: function(classType) {
        switch (classType) {
            case "Wednesday" :
                player = new Player(classType, 7, 6, 6, 10, 6, 10);
                break;
            case "Bilquis" :
                player = new Player(classType, 6, 7, 6, 8, 10, 9);
                break;
            case "Nancy" :
                player = new Player(classType, 7, 7, 7, 9, 8, 7);
                break;
            case "Czernobog" :
                player = new Player(classType, 8, 10, 6, 7, 6, 8);
                break;
        }

        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="assets/images/' + classType + '.jpg" class="image-avatar"><div><h4>' + classType + '</h4><p>Health: ' + player.health + '</p><p>Strength: ' + player.strength + '</p><p>Speed: ' + player.speed + '</p><p>Intelligence: ' + player.intelligence + '</p><p>Agility: ' + player.agility + '</p><p>Endurance: ' + player.endurance + '</p></div>';
    },

    setPreFight: function() {
        let getHeader = document.querySelector(".game-header");
        let getActions = document.querySelector(".actions");
        let getBattleground = document.querySelector(".battleground");
        getHeader.innerHTML = '<p>Step to the line: Find your opponent!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Search!</a>';
        getBattleground.style.visibility = visible;
    },

    setFight: function() {
        let getHeader = document.querySelector(".game-header");
        let getActions = document.querySelector(".actions");
        let getOpponent = document.querySelector(".opponent");
        let opponent00 = new Opponent("Technical Boy", 6, 8, 6, 9, 6, 10);
        let opponent01 = new Opponent("Media", 6, 7, 9, 9, 8, 6);
        let opponent03 = new Opponent("Mister World", 7, 8, 8, 8, 7, 7);
        let opponent04 = new Opponent("Spooks", 7, 7, 7, 7, 7, 7);
        let chooseOpponent = Math.floor(Math.random() * Math.floor(4) + 1);
        console.log(chooseOpponent);
    }
};