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
let finalMessage = [];

console.log(randomChoice(['running', 'walking', 'cycling']));
console.log(['running', 'walking', 'cycling'].length);