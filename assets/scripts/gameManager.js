let gameManager = {
    setGameStart: function(classType) {
        this.setPlayer(classType);
        this.setPreFight();
    },

    setPlayer: function(classType) {
        switch (classType) {
            case "Wednesday" :
                player = new Player(classType, 100, 30, 30, 50, 30, 50);
                break;
            case "Bilquis" :
                player = new Player(classType, 100, 35, 30, 40, 50, 45);
                break;
            case "Nancy" :
                player = new Player(classType, 100, 35, 35, 45, 40, 35);
                break;
            case "Czernobog" :
                player = new Player(classType, 100, 50, 30, 35, 30, 40);
                break;
        }

        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<section class ="infight-god-profile"><div class="container"><div class="row"><div class="col-md-5"><h4 "god-name">' + classType + '</h4><p class="health-player">Health: ' + player.health + '</p><p>Strength: ' + player.strength + '</p><p>Speed: ' + player.speed + '</p><p>Intelligence: ' + player.intelligence + '</p><p>Agility: ' + player.agility + '</p><p>Endurance: ' + player.endurance + '</p></div><div class="col-md-7"><img src="assets/images/' + classType + '.jpg" class="image-avatar"></div></section>';
    },

    setPreFight: function() {
        let getHeader = document.querySelector(".game-header");
        let getActions = document.querySelector(".actions");
        let getBattleground = document.querySelector(".battleground");
        getHeader.innerHTML = '<h3 class="game-instruction">Step to the line: <br> Find your opponent!</h3>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Search!</a>';
    },

    setFight: function() {
        let getHeader = document.querySelector(".game-header");
        let getActions = document.querySelector(".actions");
        let getOpponent = document.querySelector(".opponent");
        let opponent1 = new Opponent("Technical Boy", 100, 40, 30, 45, 36, 50);
        let opponent2 = new Opponent("Media", 100, 35, 45, 45, 40, 30);
        let opponent3 = new Opponent("Mister World", 100, 40, 40, 40, 35, 35);
        let opponent4 = new Opponent("Spooks", 100, 35, 35, 35, 35, 35);
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
        getHeader.innerHTML = '<h3 class="game-instruction">Attack! <br>If you both survive a round, attack again.</h3>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getOpponent.innerHTML = '<section class ="infight-god-profile"><div class="container"><div class="row"><div class="col-md-5"><h4 "god-name">' + opponent.opponentType + '</h4><p class="health-opponent">Health: ' + opponent.health + '</p><p>Strength: ' + opponent.strength + '</p><p>Speed: ' + opponent.speed + '</p><p>Intelligence: ' + opponent.intelligence + '</p><p>Agility: ' + opponent.agility + '</p><p>Endurance: ' + opponent.endurance + '</p></div><div class="col-md-7"><img src="assets/images/' + opponent.opponentType + '.jpg" class="image-avatar"></div></section>';
    }
};