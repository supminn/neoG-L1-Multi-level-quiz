npm install chalk;
npm install readlineSync;
// create a readline-sync to read input
var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;

console.log(chalk.keyword('yellow')('Please enter your name: '));
readlineSync.setDefaultOptions({prompt: '--> '});
var userName = readlineSync.prompt();
console.log(chalk.inverse.bold("\nHi "+ userName + ", Welcome to the set of 2 insightful quizes!!\n"));
console.log("Choose one of the following options:");

var leaderBoard = [
  {
    name:"Supriya",
    score:15,
  },
  {
    name:"Top2",
    score:9,
  },
  {
    name:"Top3",
    score:7,
  },
];


function play(question, answer, value){
  // userAnswer = readlineSync.question(question);
console.log(question);
readlineSync.setDefaultOptions({prompt: 'Your Answer: '});
var userAnswer = readlineSync.prompt();
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    score ++;
    console.log("\n"+chalk.greenBright.bold("That's the right answer!")+"\n");
  }
  else{
    console.log("\nThe right answer is "+ chalk.keyword('yellow').underline.bold(value));
    console.log("No worries, you can catch up on the next one!");
  }
  console.log("--------------------------------------------\n");
}

var musicalInstruments = [
  {
    question:`1. ${chalk.black.bgGreenBright.bold('How many types of guitars are available? ')}
    ${chalk.keyword('red')('a. Two')}
    ${chalk.keyword('yellow')('b. Four')}
    ${chalk.keyword('green')('c. Ten')}
    ${chalk.keyword('cyan')('d. Three')}
    `,
    answer: "a",
    value: "a. Two",
  },
  {
    question:`2. ${chalk.black.bgGreenBright.bold('What is the natural sounding guitar known as?')} 
    ${chalk.keyword('red')('a. Electric Guitar')}
    ${chalk.keyword('yellow')('b. Natural Guitar')}
    ${chalk.keyword('green')('c. Acoustic Guitar')}
    ${chalk.keyword('cyan')('d. Regular Guitar')}
    `,
    answer: "c",
    value: "c. Acoustic Guitar",
  },
   {
    question:`3. ${chalk.black.bgGreenBright.bold('Which instrument do the musicans play on the titanic?')}
    ${chalk.keyword('red')('a. Violin')}
    ${chalk.keyword('yellow')('b. Piano')}
    ${chalk.keyword('green')('c. Flute')}
    ${chalk.keyword('cyan')('d. Harmonium')}
    `,
    answer: "a",
    value: "a. Violin",
  },
  {
    question:`4. ${chalk.black.bgGreenBright.bold('How many strings does a guitar have in general?')} 
    ${chalk.keyword('red')('a. Two')}
    ${chalk.keyword('yellow')('b. Six')}
    ${chalk.keyword('green')('c. Eight')}
    ${chalk.keyword('cyan')('d. Four')}
    `,
    answer: "b",
    value: "b. Six",
  },
  {
    question:`5. ${chalk.black.bgGreenBright.bold('Using what can we play the violin? Ex: Guitar is played using a pick.')}
    ${chalk.keyword('red')('a. Reed')}
    ${chalk.keyword('yellow')('b. Clamp')}
    ${chalk.keyword('green')('c. Bow')}
    ${chalk.keyword('cyan')('d. Twiss')}
    `,
    answer: "c",
    value: "c. Bow",
  },
  {
    question:`6. ${chalk.black.bgGreenBright.bold('Which instrument does Shah Rukh Khan play in DDLJ?')} 
    ${chalk.keyword('red')('a. Guitar')}
    ${chalk.keyword('yellow')('b. Banjo')}
    ${chalk.keyword('green')('c. Violin')}
    ${chalk.keyword('cyan')('d. Mandolin')}
    `,
    answer: "d",
    value: "d. Mandolin",
  },
  {
    question:`7. ${chalk.black.bgGreenBright.bold('Which instrument does Lord Krishna play?')} 
    ${chalk.keyword('red')('a. Flute')}
    ${chalk.keyword('yellow')('b. Mouth Organ')}
    ${chalk.keyword('green')('c. Clarinate')}
    ${chalk.keyword('cyan')('d. Saxophone')}
    `,
    answer: "a",
    value: "a. Flute",
  },
  {
    question:`8. ${chalk.black.bgGreenBright.bold('What is the smaller version of guitar known as?')}
    ${chalk.keyword('red')('a. Small Guitar')}
    ${chalk.keyword('yellow')('b. Mini Mandolin')}
    ${chalk.keyword('green')('c. Ukulele')}
    ${chalk.keyword('cyan')('d. Mini Guitar')}
    `,
    answer: "c",
    value: "c. Ukulele",
  },
   {
    question:`9. ${chalk.black.bgGreenBright.bold('Which material is the violin bow made of?')} 
    ${chalk.keyword('red')('a. Thread')}
    ${chalk.keyword('yellow')('b. Elephant hair')}
    ${chalk.keyword('green')('c. Plastic')}
    ${chalk.keyword('cyan')('d. Horse hair')}
    `,
    answer: "d",
    value: "d. Horse hair",
  },
  {
    question:`10. ${chalk.black.bgGreenBright.bold('Which instrument does goddess Saraswathi play?')} 
    ${chalk.keyword('red')('a. Veena')}
    ${chalk.keyword('yellow')('b. Sarod')}
    ${chalk.keyword('green')('c. Mohana Veena')}
    ${chalk.keyword('cyan')('d. Sitar')}
    `,
    answer: "a",
    value: "a. Veena",
  },
  {
    question:`11. ${chalk.black.bgGreenBright.bold('How many pedals does a grand piano have?')} 
    ${chalk.keyword('red')('a. Two')}
    ${chalk.keyword('yellow')('b. Three')}
    ${chalk.keyword('green')('c. Five')}
    ${chalk.keyword('cyan')('d. Four')}
    `,
    answer: "b",
    value: "b. Three",
  },
  {
    question:`12. ${chalk.black.bgGreenBright.bold('The saxophone is a popular jazz instrument, however, what was its first use?')} 
    ${chalk.keyword('red')('a. Drowning out flutes')}
    ${chalk.keyword('yellow')('b. Military music')}
    ${chalk.keyword('green')('c. cyangrass music')}
    ${chalk.keyword('cyan')('d. Wall ornament')}
    `,
    answer: "b",
    value: "b. Military music",
  },
  {
    question:`13. ${chalk.black.bgGreenBright.bold('What is the word for a stringed instrument?')} 
    ${chalk.keyword('red')('a. Harp')}
    ${chalk.keyword('yellow')('b. Harmonica')}
    ${chalk.keyword('green')('c. Harpy')}
    ${chalk.keyword('cyan')('d. Trombone')}
    `,
    answer: "a",
    value: "a. Harp",
  },
  {
    question:`14. ${chalk.black.bgGreenBright.bold('Which of the following instruments uses a reed?')} 
    ${chalk.keyword('red')('a. Flute')}
    ${chalk.keyword('yellow')('b. Violin')}
    ${chalk.keyword('green')('c. Clarinate')}
    ${chalk.keyword('cyan')('d. Tuba')}
    `,
    answer: "c",
    value: "c. Clarinate",
  },
  {
    question:`15. ${chalk.black.bgGreenBright.bold('The theremine belongs to this class of musical instruments?')} 
    ${chalk.keyword('red')('a. Percussion')}
    ${chalk.keyword('yellow')('b. String')}
    ${chalk.keyword('green')('c. Wind')}
    ${chalk.keyword('cyan')('d. Electronic')}
    `,
    answer: "d",
    value: "d. Electronic",
  },

];

var friendsQuiz = [
  {
    question:`1. ${chalk.black.bgGreenBright.bold('For a brief amount of time, Joey and Chandler weren\'t roommates. Who replaces Joey as Chandler\'s new roommate? ')}
    ${chalk.keyword('red')('a. Eddie')}
    ${chalk.keyword('yellow')('b. Drunk Bobby')}
    ${chalk.keyword('green')('c. Russ')}
    ${chalk.keyword('cyan')('d. I don\'t know, whatever.')}
    `,
    answer: "a",
    value: "a. Eddie",
  },
  {
    question:`2. ${chalk.black.bgGreenBright.bold('What did Ross name his white-headed pet capuchin monkey?')} 
    ${chalk.keyword('red')('a. Marcella')}
    ${chalk.keyword('yellow')('b. Marciel')}
    ${chalk.keyword('green')('c. Marcel')}
    ${chalk.keyword('cyan')('d. Macarena')}
    `,
    answer: "c",
    value: "c. Marcel",
  },
   {
    question:`3. ${chalk.black.bgGreenBright.bold('Rachel-Monica are up against Chandler-Joey in a show-style game contest. The competition is getting tough the girls have bet their apartment while the boys vow to_____ if they lose:')}
    ${chalk.keyword('red')('a. Teach them how to play poker.')}
    ${chalk.keyword('yellow')('b. Give away the rooster and the duck.')}
    ${chalk.keyword('green')('c. Gift them their recliners.')}
    ${chalk.keyword('cyan')('d. All of the above.')}
    `,
    answer: "b",
    value: "b. Give away the rooster and the duck.",
  },
  {
    question:`4. ${chalk.black.bgGreenBright.bold('We all know that Joey\'s soulmate was his recliner. Do you happen to remember his precious chair\'s name? ')} 
    ${chalk.keyword('red')('a. Rosette')}
    ${chalk.keyword('yellow')('b. Rose')}
    ${chalk.keyword('green')('c. Rossalie')}
    ${chalk.keyword('cyan')('d. Rosita')}
    `,
    answer: "d",
    value: "d. Rosita",
  },
  {
    question:`5. ${chalk.black.bgGreenBright.bold('Rachel and Chandler are obsessed with this New York Style cheesecake which was for their neighbour, Mrs. Braverman. Which bakery accidentally delivers the cheesecake to Chandler\'s address? ')}
    ${chalk.keyword('red')('a. Mamma\'s Little Bakery')}
    ${chalk.keyword('yellow')('b. The Cheesecake Factory')}
    ${chalk.keyword('green')('c. Granny\'s Cafe')}
    ${chalk.keyword('cyan')('d. IHOP?')}
    `,
    answer: "a",
    value: "a. Mamma's Little Bakery",
  },
  {
    question:`6. ${chalk.black.bgGreenBright.bold('Remember when Monica briefly worked at a retro diner as a server? Would you happen to remember the exact name of the diner where she did her YMCA routine?')} 
    ${chalk.keyword('red')('a. Moonchild Diner')}
    ${chalk.keyword('yellow')('b. Moonshine Diner')}
    ${chalk.keyword('green')('c. Moondance Diner')}
    ${chalk.keyword('cyan')('d. Moonlight Diner')}
    `,
    answer: "c",
    value: "c. Moondance Diner",
  },
  {
    question:`7. ${chalk.black.bgGreenBright.bold('Phoebe has a very chilling signature artwork that easily spooks people. What does she call her masterpeiece?')} 
    ${chalk.keyword('red')('a. Gladys')}
    ${chalk.keyword('yellow')('b. Smelly Cat')}
    ${chalk.keyword('green')('c. Glynnis')}
    ${chalk.keyword('cyan')('d. Gyllian')}
    `,
    answer: "a",
    value: "a. Gladys",
  },
  {
    question:`8. ${chalk.black.bgGreenBright.bold('How many times has Ross Geller been married and divorced?')}
    ${chalk.keyword('red')('a. Married thrice, two divorces, one annulment')}
    ${chalk.keyword('yellow')('b. Married and divorced thrice.')}
    ${chalk.keyword('green')('c. Married thrice, two divorces and a separation.')}
    ${chalk.keyword('cyan')('d. TBH, I have lost count.')}
    `,
    answer: "b",
    value: "b. Married and divorced thrice.",
  },
   {
    question:`9. ${chalk.black.bgGreenBright.bold('While discussing her worst Thanksgiving, Monica reveals that she \'accidentally    \' cuts off Chandler\'s toe in the past. Would you happen to remember what she was cooking for him?')} 
    ${chalk.keyword('red')('a. Mac n cheese')}
    ${chalk.keyword('yellow')('b. Beef Triffle')}
    ${chalk.keyword('green')('c. Monica\'s famous lasagna')}
    ${chalk.keyword('cyan')('d. Mockolate')}
    `,
    answer: "a",
    value: "a. Mac n cheese",
  },
  {
    question:`10. ${chalk.black.bgGreenBright.bold('So Phoebe officially changes her name to Princess Consuela Banana Hammock and \'inspired\' by this Mike changes his name to?')} 
    ${chalk.keyword('red')('a. Shit Head')}
    ${chalk.keyword('yellow')('b. Crap Bag')}
    ${chalk.keyword('green')('c. Prince Carppity Bull')}
    ${chalk.keyword('cyan')('d. Mr. Consuela Banana Hammock')}
    `,
    answer: "b",
    value: "b. Crap Bag",
  },
  {
    question:`11. ${chalk.black.bgGreenBright.bold('Remember when Monica, Chandler and Joey are on a beach and Monica gets stung by a jellyfish? Who pees on her leg to relieve the pain?')} 
    ${chalk.keyword('red')('a. Chandler')}
    ${chalk.keyword('yellow')('b. Joey')}
    ${chalk.keyword('green')('c. She doesn\'t need a man to do it, she does it  herself.')}
    ${chalk.keyword('cyan')('d. IDK, what happened on the beach, stayed on the beach.')}
    `,
    answer: "a",
    value: "a. Chandler",
  },
  {
    question:`12. ${chalk.black.bgGreenBright.bold('Ross sings a little something to make baby Emma laugh? Would you happen to remember what it was?')} 
    ${chalk.keyword('red')('a. Twinkle Twinkle Little Star')}
    ${chalk.keyword('yellow')('b. I like big butts and I cannot lie.')}
    ${chalk.keyword('green')('c. Old Macdonald')}
    ${chalk.keyword('cyan')('d. One Mississippi, Two Mississippi, Three Mississippi')}
    `,
    answer: "b",
    value: "b. I like big butts and I cannot lie.",
  },
  {
    question:`13. ${chalk.black.bgGreenBright.bold('So Chandler broke the \'bro code\', cheated on Joey and kissed the girl Joey was seeing. Who was that girlfriend?')} 
    ${chalk.keyword('red')('a. Janice')}
    ${chalk.keyword('yellow')('b. Charlie Wheeler')}
    ${chalk.keyword('green')('c. Kathy')}
    ${chalk.keyword('cyan')('d. Nobody broke the \'bro code\', get your facts right.')}
    `,
    answer: "c",
    value: "c. Kathy",
  },
  {
    question:`14. ${chalk.black.bgGreenBright.bold('We know that Chandler was the one to say the closing lines on the show. What does he say?')} 
    ${chalk.keyword('red')('a. "Let\'s get some coffee?"')}
    ${chalk.keyword('yellow')('b. This is goodbye')}
    ${chalk.keyword('green')('c. I love you all so much')}
    ${chalk.keyword('cyan')('d. Sure, where?')}
    `,
    answer: "d",
    value: "d. Sure, where?",
  },
  {
    question:`15. ${chalk.black.bgGreenBright.bold('What is the name of Pheobe\'s alter-ego?')} 
    ${chalk.keyword('red')('a. Pheobe Neeby')}
    ${chalk.keyword('yellow')('b. Urcela Buffay')}
    ${chalk.keyword('green')('c. Monica Bing')}
    ${chalk.keyword('cyan')('d. Regina Falange')}
    `,
    answer: "d",
    value: "d. Regina Falange",
  },

];

var quizOptions = ["Quiz on Musical Instruments","Quiz on F.R.I.E.N.D.S"];
quizChoice = readlineSync.keyInSelect(quizOptions, 'Which quiz do you want to play?');
console.log(chalk.underline("\n"+quizOptions[quizChoice] + " is enabled.\n"));
var quizType = "0";
if(quizOptions[quizChoice]==="Quiz on F.R.I.E.N.D.S"){
  quizType = friendsQuiz;
}
else if(quizOptions[quizChoice]==="Quiz on Musical Instruments"){
  quizType = musicalInstruments;
}
else{
  process.exit();
}


console.log("This quiz comprises of "+chalk.bold(quizType.length)+" questions which are divided into "+chalk.italic('3')+" levels.\nEach question would have "+chalk.italic('4')+" options amongst which one is correct. \nYou would need to have "+chalk.bgYellow.bold('3/5')+" correct answers to qualify to the next level.\nAim to get'em all right to top the leaderboard.\n");


var levelScore = 0;
console.log(chalk.bold("\nLEVEL -- 1\n"));
for(var i=0; i<5; i++){
  play(quizType[i].question,quizType[i].answer,quizType[i].value);
}
levelScore = score;
if(levelScore<3){
  console.log("Unfortunately, you couldn't make it to the next level."+chalk.yellow(" Better luck next time"));
}
else{
  console.log(chalk.inverse.bold("\nWow, you made it to level 2!"));
  console.log(chalk.bold("\nLEVEL -- 2\n"));
  for(var i=5; i<10; i++){
    play(quizType[i].question,quizType[i].answer,quizType[i].value);
  }
  levelScore = score - levelScore;
  if(levelScore>=3){
    console.log(chalk.inverse.bold("\nAwesome, you cleared it to the last level!"));
    console.log(chalk.bold("\nLEVEL -- 3\n"));
    for(var i=10; i<15; i++){
      play(quizType[i].question,quizType[i].answer,quizType[i].value);
    }
  }
  else{
     console.log("Unfortunately, you couldn't make it to the last level."+chalk.yellow(" Better luck next time"));
  }
}

console.log(chalk.bold("\nYour final score: " + chalk.keyword('yellow')(score)));
for(var i = 0;i<leaderBoard.length;i++){
  if(score>leaderBoard[i].score){
    leaderBoard[i].name = userName;
    leaderBoard[i].score = score;
    console.log(chalk.italic("\n Congratulations, you made it to the leaderboard! \n"));
    break;
  }
}

console.log(chalk.underline("Leaderboard is as following: "));
for(var i =0;i<leaderBoard.length;i++){
  console.log("\n"+(i+1)+". "+chalk.italic(leaderBoard[i].name) + " has scored "+ chalk.bold(leaderBoard[i].score)+" points!");
  }
