var readlineSync = require('readline-sync');

const chalk = require('chalk');

var questions = [
  {
    question : "How many teams are participating in the ICC World Cup 2019?",
    options : ['8','9','10','12'],
    answer : '10'
  },
  {
    question : "Which cricket team has won most ICC Cricket World Cup titles?",
    options : ['West Indies', 'India', 'England', 'Australia'],
    answer : "Australia"
  },
  {
    question : "When was first ICC cricket World Cup started?",
    options : ['1972','1975','1985','1979'],
    answer : '1975'
  },
  {
    question : "Which Indian cricketer had won the “Man of the Match” award in the final of the ICC World Cup 1983?",
    options : ['Kapil Dev','Sunil Gavaskar','Ravi Shastri','Mohinder Amarnath'],
    answer : 'Mohinder Amarnath'
  },
  {
    question : "Who was the captain of the Indian cricket team in the ICC World Cup 1983??",
    options : ['Sunil Gavaskar','Kirti Azad','Ravi Shastri','Kapil Dev'],
    answer : 'Kapil Dev'
  }
]

play(questions)

function play(ques){
  var userName = readlineSync.question("Enter Name : ");
  console.log("Welcome "+ userName +" lets start quiz!!")

  for(var i=0; i<ques.length; i++){
    var currentQues = ques[i];
    console.log(currentQues.question);
    var currentOptions = currentQues.options;
    for(var j=0;j<currentOptions.length;j++){
      console.log(j+1 +"." + currentOptions[j])
    }
    var answered = readlineSync.question("Your answer : ");
    if(answered.toUpperCase() == currentQues.answer.toUpperCase()){
      console.log("Correct")
    }else{
      console.log("Wrong")
    }

    console.log(chalk.yellow('----------------------------------------'))
  }
}

