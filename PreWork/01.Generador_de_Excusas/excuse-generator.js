// Excuse Generator - JavaScript file prepared for Node.js execution

const who = ["The dog", "My grandma", "His turtle", "My bird"];

const action = ["ate", "destroyed", "stole", "hid"];

const what = ["my homework", "the keys", "the car", "my phone"];

const when = ["today", "yesterday", "this morning", "last night"];

const randomWho = who[Math.floor(Math.random() * who.length)];

const randomAction = action[Math.floor(Math.random() * action.length)];

const randomWhat = what[Math.floor(Math.random() * what.length)];

const randomWhen = when[Math.floor(Math.random() * when.length)];

const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

console.log(excuse);