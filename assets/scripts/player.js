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
    }

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
    }
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
        } else {
            alert("Your opponent evaded your strike!");
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
            } else {
                alert("You evaded your opponent's strike!");
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
        } else {
            alert("You evaded your opponent's strike!");
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
            } else {
                alert("Your opponent evaded your strike!")
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

}