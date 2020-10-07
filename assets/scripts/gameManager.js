//I created this game by adapting from the following tutorial (see further details in the 'Game' PDF): https://www.youtube.com/watch?v=M6sA8fvMCuA

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
        getHeader.innerHTML = '<h3 class="game-fight-heading">Hit the button below to find your opponent!</h3>';
        getActions.innerHTML = '<section class="actions container-fluid"><div class="row"><div class="col-sm-12 text-center"><a href="#" class="btn btn-success btn-lg" onclick="gameManager.setFight()">Search!</a></div></div></section>';
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
        getHeader.innerHTML = '<h3 id="scoreboard" class="game-fight-heading">Instructions</h3><p id="scoreboard1" class="game-instruction">- To play, hit the buttons at the bottom of your screen.</p><p id="scoreboard2" class="game-instruction">- Hit ATTACK to initiate an exchange with your opponent.</p><p id="scoreboard3" class="game-instruction">- Hit RETREAT to take a breather and regain health points, but beware: You could trip and fall!</p><p id="scoreboard4" class="game-instruction">- If you get desperate, hit GO NUCLEAR. You will summon enough godly power to end your opponent with one almighty blow, but beware: There is a 50 per cent chance you will lose control and blow yourself up!</p><p id="scoreboard5" class="game-instruction">- Keep your eye on the scoreboard here and keep hitting buttons till either you or your opponent winds up in Valhalla!</p>';
        getActions.innerHTML = '<section class="actions container-fluid"><div class="row"><div class="col-sm-12 text-center"><a href="#" class="btn btn-success btn-lg fight-btn" onclick="PlayerMoves.calcAttack(); scoreboard();">Attack!</a></div></div></section><section class="actions container-fluid"><div class="row"><div class="col-sm-12 text-center"><a href="#" class="btn btn-secondary btn-lg fight-btn" onclick="retreat(); scoreboard();">Retreat!</a></div></div></section><section class="actions container-fluid"><div class="row"><div class="col-sm-12 text-center"><a href="#" class="btn btn-danger btn-lg fight-btn" onclick="nuclearOption(); scoreboard();">Go nuclear!</a></div></div></section>';
        getOpponent.innerHTML = '<section class ="infight-god-profile"><div class="container"><div class="row"><div class="col-md-5"><h4 "god-name">' + opponent.opponentType + '</h4><p class="health-opponent">Health: ' + opponent.health + '</p><p>Strength: ' + opponent.strength + '</p><p>Speed: ' + opponent.speed + '</p><p>Intelligence: ' + opponent.intelligence + '</p><p>Agility: ' + opponent.agility + '</p><p>Endurance: ' + opponent.endurance + '</p></div><div class="col-md-7"><img src="assets/images/' + opponent.opponentType + '.jpg" class="image-avatar"></div></section>';
    }
};