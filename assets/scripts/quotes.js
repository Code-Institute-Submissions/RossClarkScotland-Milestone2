console.log("Kimba!");

function quoteGenerator() {
    let quotes = [
    "Organizing gods is like herding cats into straight lines. They don't take naturally to it.",
    "Angry gets shit done.",
    "Every hour wounds. The last one kills",
    "Even nothing cannot last forever",
    "He wondered whether home was a thing that happened to a place after a while, or if it was something that you found in the end, if you simply walked and waited and willed it long enough.",
    "As sure as water is wet and days are long and a friend will always disappoint you in the end.",
   "I think I would rather be a man than a god. We don't need anyone to believe in us. We just keep going anyhow. It's what we do.",
    "He was no longer scared of what tommorow might bring because yesterday has brought it.",
    "You are an analog girl, living in a digital world.",
    "People populate the darkness; with ghosts, with gods, with electrons, with tales.",
    "I believe that anyone who claims to know what's going on will lie about the little things too.",
    "If hell is other people . . . then purgatory is airports.",
    "There was nowhere they could have gone and they went there anyway.",
    "Information and knowledge: two currencies that have never gone out of style.",
    "Mostly you are what you think you are."
];
    let randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteScreen').innerHTML = quotes[randomNum];
}