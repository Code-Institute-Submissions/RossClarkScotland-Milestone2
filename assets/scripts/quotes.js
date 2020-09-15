const quoteBtn = document.getElementById('quoteBtn');
 
quoteBtn.addEventListener("click", function() {
    let quotes = [
    "Organizing gods is like herding cats into straight lines. They don't take naturally to it.",
    "Angry gets shit done.",
    "Every hour wounds. The last one kills",
    "The shape does not change: there was a human being who was born, lived and then, by some means or another, died. There. You may fill in the details from your own experience.",
    "Here, far from our homes, we will be forgotten by our gods.",
    "Pain hurts, just as greed intoxicates and lust burns.",
    "Even nothing cannot last forever",
    "He wondered whether home was a thing that happened to a place after a while, or if it was something that you found in the end, if you simply walked and waited and willed it long enough.",
    "As sure as water is wet and days are long and a friend will always disappoint you in the end.",
    "I think I would rather be a man than a god. We don't need anyone to believe in us. We just keep going anyhow. It's what we do.",
    "He was no longer scared of what tommorow might bring because yesterday has brought it.",
    "You're an analog girl, living in a digital world.",
    "It's like one of those dreams that changes you. You keep some of the dream forever, and you know things down deep inside yourself, because it happened to you, but when you go looking for details they kind of just slip out of your head.",
    "People populate the darkness; with ghosts, with gods, with electrons, with tales.",
    "I believe that anyone who claims to know what's going on will lie about the little things too.",
    "If hell is other people . . . then purgatory is airports.",
    "There was nowhere they could have gone and they went there anyway.",
    "Information and knowledge: two currencies that have never gone out of style.",
    "They all do the same things. They may think their sins are original, but for the most part they are petty and repetitive.",
    "Mostly you are what you think you are.",
    "I believe in a personal god who cares about me and worries and oversees everything I do. I believe in an impersonal god who set the universe in motion and went off to hang with her girlfriends and doesn't even know that I'm alive. I believe in an empty and godless universe of causal chaos, background noise, and sheer blind luck.",
    "I believe that anyone who says sex is overrated just hasn't done it properly.",
    "I believe in absolute honesty and sensible social lies. I believe in a woman's right to choose, a baby's right to live, that while all human life is sacred there's nothing wrong with the death penalty if you can trust the legal system implicitly, and that no one but a moron would ever trust the legal system.",
    "I believe that life is a game, that life is a cruel joke, and that life is what happens when you're alive and that you might as well lie back and enjoy it.",
    "When you don't know where you're going it always seems longer - you ever notice that? First time takes forever, and then ever after it's over in a flash.",
    "It's what people do. They believe. And when they will not take responsibilities for their beliefs; they conjure things, and do not trust the conjurations.",
    "Old but contented, the face of a man who had sipped life’s vinegar and found it, by and large, to be mostly whiskey, and good whiskey at that.",
    "...he said nothing. It seemed the smartest thing to say.",
    "The boundaries of our country, sir? Why sir, on the north we are bounded by the Aurora Borealis, on the east we are bounded by the rising sun, on the south we are bounded by the procession of the Equinoxes, and on the west by the Day of Judgement.",
    "But it was a dream, and in dreams, sometimes, you have no choices: either there are no decisions to be made, or they were made for you long before ever the dream began.",
    "Religions are places to stand and look and act, vantage points from which to view the world.",
    "I can tell you this, you never say no to the opportunity to piss, to eat, or to get an half-hour's shut eye...",
    "Family is who you survive with when you need to survive - even if you do not like them.",
    "I feel very sorry for the professionals whenever they find another confusing skull, something that belonged to the wrong sort of people, or whenever they find statues or artifacts that confuse them—for they’ll talk about the odd, but they won’t talk about the impossible, which is where I feel sorry for them, for as soon as something becomes impossible it slipslides out of belief entirely, whether it’s true or not.",
    "I believe that mankind's destiny lies in the stars. I believe that candy really did taste better when I was a kid, that it's aerodynamically impossible for a bumble bee to fly, that light is a wave and a particle, that there's a cat in a box somewhere who's alive and dead at the same time (although if they don't ever open the box to feed it it'll eventually just be two different kinds of dead), and that there are stars in the universe billions of years older than the universe itself."
];
    const randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteScreen').innerHTML = quotes[randomNum];
}); 

