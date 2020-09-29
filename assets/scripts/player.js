//I created this game by adapting from the following tutorial (see further details in the Appendix) to the ReadMe: https://www.youtube.com/watch?v=M6sA8fvMCuA

let player;

function Player(classType, health, strength, speed, intelligence, agility, endurance) {
    this.classType = classType;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.intelligence = intelligence;
    this.agility = agility;
    this.endurance = endurance;
}



let PlayerMoves = {
    calcAttack: function() {
        // Determines who attacks first
        let getPlayerSpeed = player.speed;
        let getOpponentSpeed = opponent.speed;
            //Player attacks
    let playerAttack = function() {
        let damage;
        if (player.strength > 8) {
            damage = 150;
    } else {
            damage = 80;
    }
    let offsetDamage = Math.round(opponent.agility + opponent.speed + opponent.intelligence + opponent.endurance / 50);
    let calcFinalDamage = damage - offsetDamage;
    let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 15));
    let attackValues = [calcFinalDamage, numberOfHits];
    return attackValues;
    };

    let opponentAttack = function() {
    let damage;
    if (opponent.strength > 8) {
        damage = 150;
    } else {
        damage = 120;
    }
    let offsetDamage = Math.round(player.agility + player.speed + player.intelligence + player.endurance / 50);
    let calcFinalDamage = damage - offsetDamage;
    let numberOfHits = Math.floor(Math.random() * Math.floor(opponent.agility / 15));
    let attackValues = [calcFinalDamage, numberOfHits];
    return attackValues;
    };
    //Calculate player and opponent health scores after attacks
    let getPlayerHealth = document.querySelector(".health-player");
    let getOpponentHealth = document.querySelector(".health-opponent");
    // Who attacks first?
    if (getPlayerSpeed >= getOpponentSpeed) {
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        opponent.health = opponent.health - totalDamage;
        if (totalDamage > 0) {
        alert("You scored " + totalDamage + " damage points!");
        document.querySelector("#scoreboard1").innerHTML = "- You scored " + totalDamage + " damage points!";
        } else if (totalDamage == 0 && playerAttackValues[0] % 2 == 0) {
            alert("Your opponent blocked your strike!");
            document.querySelector("#scoreboard1").innerHTML = "- Your opponent blocked your strike!";
        } else {
            alert("Your opponent evaded your strike!");
            document.querySelector("#scoreboard1").innerHTML = "- Your opponent evaded your strike!";
        }
        if (opponent.health <= 0) {
            alert("You won! Refresh your browser to do battle again.");
            getPlayerHealth.innerHTML = 'Health: ' + Math.floor(player.health);
            getOpponentHealth.innerHTML = 'Health: 0';
        } else {
            getOpponentHealth.innerHTML = 'Health: ' + Math.floor(opponent.health);
            //Opponent attack
            let opponentAttackValues = opponentAttack();
            let totalDamage = opponentAttackValues[0] * opponentAttackValues[1];
            player.health = player.health - totalDamage;
            if (totalDamage > 0) {
                alert("Your opponent scored " + totalDamage + " damage points!");
                document.querySelector("#scoreboard2").innerHTML = "- Your opponent scored " + totalDamage + " damage points!";
            } else if (totalDamage == 0 && opponentAttackValues[0] % 2 == 0) {
                alert("You blocked your opponent's strike!");
                document.querySelector("#scoreboard2").innerHTML = "- You blocked your opponent's strike!";
            } else {
                alert("You evaded your opponent's strike!");
                document.querySelector("#scoreboard2").innerHTML = "- You evaded your opponent's strike!";
            }
            if (player.health <= 0) {
                alert("You lost! Refresh your browser resurrect yourself and do battle again.");
                getPlayerHealth.innerHTML = 'Health: 0';
                getOpponentHealth.innerHTML = 'Health: ' + opponent.health;
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                }
            }
            } else if (getOpponentSpeed >= getPlayerSpeed) {
                let opponentAttackValues = opponentAttack();
                let totalDamage = opponentAttackValues[0] * opponentAttackValues[1];
                player.health = player.health - totalDamage;
            if (totalDamage > 0) {
                alert("Your opponent scored " + totalDamage + " damage points!");
                document.querySelector("#scoreboard2").innerHTML = "- Your opponent scored " + totalDamage + " damage points!";
            } else if (totalDamage == 0 && opponentAttackValues[0] % 2 == 0) {
                alert("You blocked your opponent's strike!");
                document.querySelector("#scoreboard2").innerHTML = "- You blocked your opponent's strike!";
            } else {
                alert("You evaded your opponent's strike!");
                document.querySelector("#scoreboard2").innerHTML = "- You evaded your opponent's strike!";
            }
            if (player.health <= 0) {
                alert("You lose! Refresh your browser to resurrect yourself and do battle again.");
                getOpponentHealth.innerHTML = 'Health: ' + opponent.health;
                getPlayerHealth.innerHTML = 'Health: 0';
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                //Player attack
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                opponent.health = opponent.health - totalDamage;
                if (totalDamage > 0) {
                alert("You scored " + totalDamage + " damage points!");
                document.querySelector("#scoreboard1").innerHTML = "- You scored " + totalDamage + " damage points!";
            } else if (totalDamage == 0 && playerAttackValues[0] % 2 == 0) {
                alert("Your opponent blocked your strike!");
                document.querySelector("#scoreboard1").innerHTML = "- Your opponent blocked your strike!";
            } else {
                alert("Your opponent evaded your strike!");
                document.querySelector("#scoreboard1").innerHTML = "- Your opponent evaded your strike!";
            }
            if (opponent.health <= 0) {
                alert("You win! Refresh your browser to do battle again.");
                getOpponentHealth.innerHTML = 'Health: 0';
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
            } else {
                getOpponentHealth.innerHTML = 'Health: ' + opponent.health;
                }
            }
        }
    }
};

function retreat() {
    let retreatScore = Math.floor(Math.random() * 4 + 1);
    let getPlayerHealth = document.querySelector(".health-player");
    let getOpponentHealth = document.querySelector(".health-opponent");
    if (retreatScore == 1) {
        player.health = player.health - 20;
        alert("You stumbled and fell! Your opponent hit you for 20 damage points!");
        document.querySelector("#scoreboard1").innerHTML = "- You stumbled and fell! Your opponent hit you for 20 damage points!";
        document.querySelector("#scoreboard2").innerHTML = "";
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
    } else if (retreatScore == 2) {
        player.health = player.health - 30;
        alert("You tripped and and fell badly! Your opponent hit you for 30 damage points!");
        document.querySelector("#scoreboard1").innerHTML = "- You tripped and and fell badly! Your opponent hit you for 30 damage points!";
        document.querySelector("#scoreboard2").innerHTML = "";
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
    } else if (retreatScore == 3) {
        player.health = player.health + 20;
        alert("You stepped out of your opponent's range and caught your breath for 20 health points!");
        document.querySelector("#scoreboard1").innerHTML = "- You stepped out of your opponent's range and caught your breath for 20 health points!";
        document.querySelector("#scoreboard2").innerHTML = "";
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
    } else {
        player.health = player.health + 30;
        alert("You retreated to higher ground and rested for 30 health points!");
        document.querySelector("#scoreboard1").innerHTML = "- You retreated to higher ground and rested for 30 health points!";
        document.querySelector("#scoreboard2").innerHTML = "";
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
    }
    if (player.health <= 0) {
        alert("You lose! Refresh your browser to resurrect yourself and do battle again.");
    }
}

function nuclearOption() {
    let nuclear = Math.floor(Math.random() * 2 + 1);
    let getPlayerHealth = document.querySelector(".health-player");
    let getOpponentHealth = document.querySelector(".health-opponent");
    if (nuclear == 1) {
        player.health = 0;
        alert("You blew yourself up!");
        document.querySelector("#scoreboard1").innerHTML = "- YOU BLEW YOURSELF UP!";
        document.querySelector("#scoreboard2").innerHTML = "";
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
    } else {
        opponent.health = 0;
        alert("You went nuclear on your opponent and ended them!");
        document.querySelector("#scoreboard1").innerHTML = "- YOU WENT NUCLEAR ON YOUR OPPONENT AND ENDED THEM!";
        document.querySelector("#scoreboard2").innerHTML = "";
        getOpponentHealth.innerHTML = 'Health: ' + opponent.health;
    }
    if (player.health <= 0) {
        alert("You lose! Refresh your browser to resurrect yourself and do battle again.");
    }
    if (opponent.health <= 0) {
            alert("You win! Refresh your browser to do battle again.");
    }
}

function scoreboard() {
    let getScoreboard = document.querySelector("#scoreboard");
    let getScoreboard3 = document.querySelector("#scoreboard3");
    let getScoreboard4 = document.querySelector("#scoreboard4");
    if (player.health <= 0) {
        getScoreboard.innerHTML = "You lose! Refresh your browser to resurrect yourself and do battle again.";
        document.querySelector("#scoreboard3").innerHTML = "- YOUR HEALTH: 0";
        document.querySelector("#scoreboard5").innerHTML = "";
    } else if (opponent.health <= 0) {
        getScoreboard.innerHTML ="You win! Refresh your browser to do battle again.";
        document.querySelector("#scoreboard4").innerHTML = "- OPPONENT HEALTH: 0";
        document.querySelector("#scoreboard5").innerHTML = "";
    } else {
        getScoreboard.innerHTML ="Scoreboard";
        getScoreboard3.innerHTML = '- YOUR HEALTH: ' + player.health;
        getScoreboard4.innerHTML = '- OPPONENT HEALTH: ' + opponent.health;
        document.querySelector("#scoreboard5").innerHTML = "";
    }  
}