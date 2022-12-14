const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const survey = {};

rl.question('What\'s your name? Nicknames are also acceptable :)\n', (answer1) => {
  survey.name = answer1;
  rl.question('What\'s an activity you like doing?\n', (answer2) => {
    survey.activity = answer2;
    rl.question('What do you listen to while doing that?\n', (answer3) => {
      survey.music = answer3;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)\n', (answer4) => {
        survey.meal = answer4;
        rl.question('What\'s your favourite thing to eat for that meal?\n', (answer5) => {
          survey.mealItem = answer5
          rl.question('Which sport is your absolute favourite?\n', (answer6) => {
            survey.sport = answer6;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!\n', (answer7) => {
              survey.amazingSkill = answer7;
              console.log(`Hi my name is ${survey.name}. I enjoy ${survey.activity}, I listen to ${survey.music} while doing ${survey.activity}. My favourite meal is ${survey.meal}. My favourite thing to eat during ${survey.meal} is ${survey.mealItem}. My favourite sport is ${survey.sport}. My superpower is ${survey.amazingSkill}\n`);
              rl.close();
            });
          });
        });
      });
    });
  });
});


