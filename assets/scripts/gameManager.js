const gameManager = {
    setGameStart: function(classType) {
        this.setPlayer(classType);
        this.setPreFight();
    },

    setPlayer: function(classType) {
        switch (classType) {
            case: "Wednesday":
                player = new Player(classType, 7, 6, 6, 10, 6, 10);
                break;
            case: "Bilquis":
                player = new Player(classType, 6, 7, 6, 8, 10, 9);
                break;
            case: "Nancy":
                player = new Player(classType, 7, 7, 7, 9, 8, 7);
                break;
            case: "Czernobog":
                player = new Player(classType, 8, 10, 6, 7, 6, 8);
                break;
        }
    },

    setPreFight: function() {

    }
}