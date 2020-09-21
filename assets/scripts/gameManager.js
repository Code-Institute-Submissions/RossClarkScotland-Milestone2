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

    }
};