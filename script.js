//Creating a helper function for selecting a random option
function randomChoice(obj) {
    return Math.floor(Math.random(obj) * obj.length);
}

// choices to build up the funny, ish, story
const choices = {
    names: ['Steve', 'Becci', 'Josh', 'Owen', 'Alfie', 'Buddy', 'Felix', 'Frodo', 'Bertie'],
    actions: ['walking','running','cycling','rowing','driving', 'skiing', 'skateboarding', 'scooting', 'skipping', 'jogging'],
    results: ['laughing uncontrollably', 'vommiting profusly','farting loudly', 'burping rudely', 'sneezing violently', 'falling asleep'] 
};

// set message variable
let funnyishPassage = [];
let outPut = '';

// Create the message by adding details to the funnyishPassage array
for(item in choices){
    let idx = randomChoice(choices[item]);
    funnyishPassage.push(choices[item][idx]);    
}

outPut = `One day ${funnyishPassage[0]} decided to go ${funnyishPassage[1]}.  ${funnyishPassage[0]} was stopped by an old woman in dressed in black who offered ${funnyishPassage[0]} something to eat.  On first bite the old lady vanished and ${funnyishPassage[0]} began ${funnyishPassage[2]}`;

console.log(outPut);
