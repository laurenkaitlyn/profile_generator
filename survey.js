
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {
  1: "What's your name? nicknames allowed too! ",
  2: "What's an activity you like doing? ",
  3: "What do you listen to while doing that? ",
  4: "Which meal is your favourite (breakfast, lunch..)? ",
  5: "What's your favourite thing to eat for that meal? ",
  6: "Which sport is your absolute favourite? ",
  7: "What is your superpower? "
};

let answers = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: ''
};

const question = () => {
  let i = 1;
  if (i < 8) {
    rl.question(`${questions[i]}\n`, (answer) => {
      answers[i] = answer;
      i++;
      console.log()
      question();
    
    });
  } else {
    rl.close();
    console.log(`${answers[1]}'s new profile:`);
    setTimeout(() => (console.log(`
    ${answers[1]}'s favourite activity is: ${answers[2]},
       their favourite music to listen to while doing that is ${answers[3]},
       their favourtie meal is ${answers[5]} for ${answers[4]},
       their favourite sport is ${answers[6]}, and their superpower is ${answers[7]}`)
    ), 1500);
    }
}



question();
