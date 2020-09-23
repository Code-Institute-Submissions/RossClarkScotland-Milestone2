let gameManager = {
    setGameStart: function(classType) {
        this.setPlayer(classType);
        this.setPreFight();
    },

    setPlayer: function(classType) {
        switch (classType) {
            case "Wednesday" :
                player = new Player(classType, 35, 30, 30, 50, 30, 50);
                break;
            case "Bilquis" :
                player = new Player(classType, 30, 35, 30, 40, 50, 45);
                break;
            case "Nancy" :
                player = new Player(classType, 35, 35, 35, 45, 40, 35);
                break;
            case "Czernobog" :
                player = new Player(classType, 40, 50, 30, 35, 30, 40);
                break;
        }

        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="assets/images/' + classType + '.jpg" class="image-avatar"><div><h4>' + classType + '</h4><p class="health-player">Health: ' + player.health + '</p><p>Strength: ' + player.strength + '</p><p>Speed: ' + player.speed + '</p><p>Intelligence: ' + player.intelligence + '</p><p>Agility: ' + player.agility + '</p><p>Endurance: ' + player.endurance + '</p></div>';
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
        let opponent1 = new Opponent("Technical Boy", 30, 40, 30, 45, 36, 50);
        let opponent2 = new Opponent("Media", 30, 35, 45, 45, 40, 30);
        let opponent3 = new Opponent("Mister World", 35, 40, 40, 40, 35, 35);
        let opponent4 = new Opponent("Spooks", 35, 35, 35, 35, 35, 35);
        let chooseOpponent = Math.floor(Math.random() * Math.floor(4) + 1);
        switch (chooseOpponent) {
            case 1: 
                opponent = opponent1;
                break;
            case 2: 
                opponent = opponent2;
                break;
            case 3: 
                opponent = opponent3;
                break;
            case 4: 
                opponent = opponent4;
                break;   
        }
        getHeader.innerHTML = '<p>Make your move!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getOpponent.innerHTML = '<img src="assets/images/' + opponent.opponentType + '.jpg" class="image-avatar"><div><h4>' + opponent.opponentType + '</h4><p class="health-opponent">Health: ' + opponent.health + '</p><p>Strength: ' + opponent.strength + '</p><p>Speed: ' + opponent.speed + '</p><p>Intelligence: ' + opponent.intelligence + '</p><p>Agility: ' + opponent.agility + '</p><p>Endurance: ' + opponent.endurance + '</p></div>';
    }
};