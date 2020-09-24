//I created this game by adapting from the following tutorial (see further details in the Appendix ) to the ReadMe: https://www.youtube.com/watch?v=M6sA8fvMCuA

let opponent;

function Opponent(opponentType, health, strength, speed, intelligence, agility, endurance) {
    this.opponentType = opponentType;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.intelligence = intelligence;
    this.agility = agility;
    this.endurance = endurance;
}