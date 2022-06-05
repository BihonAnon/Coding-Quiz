
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
//>>DONE
// WHEN I answer a question
// THEN I am presented with another question
//>>DONE
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// >>DONE
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

const qSet = [
["Here is the Question", "Wrong", "Right", "Wrong", "Wrong", "Right"],
["Heres Another Q", "Answer", "Answer", "Wrong", "Answer", "Wrong"]
];//Questons
  // light theme state
var startB = document.getElementById("startB")
var question = document.getElementById("questionLine")
var answerA = document.getElementById("answerA")
var answerB = document.getElementById("answerB")
var answerC = document.getElementById("answerC")
var answerD = document.getElementById("answerD")
var timeEl = document.getElementById("timertimer")
var timeLeft = 30;
var remainingQ = 4;
var playerScore = 0;

function startGame(){//Start Game, Timer gets set, Question gets set.
  chooseQ();
  displayQ(QIndex); //Questions Set
}
function chooseQ(){ //RANDOM NUMBER GEN SENDS TO GLOBAL VARIABLE
  QIndex = Math.floor(Math.random()* qSet.length);
  return QIndex;
}
function displayQ(index){//Send Questions And Answers Via Array
  //qSet, multidimentional Array with questions in [0] and answers in [1,2,3]
  console.table(qSet);
  QQ = qSet[index][0];
  question.textContent = QQ; 
  console.log(QQ + " ,");
  QA = qSet[index][1];
  answerA.textContent = QA; 
  console.log(QA + " ,");
  QB = qSet[index][2];
  answerB.textContent = QB; 
  console.log(QB + " ,");
  QC = qSet[index][3];
  answerC.textContent = QC; 
  console.log(QC + " ,");
  QD = qSet[index][4];
  answerD.textContent = QD; 
  console.log(QD);
}
//TIMER TIMES THINGS
    
var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerId);
    startGame();
  } else {
    timeEl.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}
//START GAME

//ONCLICK TO START GAME
document.getElementById("startB").onclick = function(){
  startGame();
  timeLeft = 45;
}
//ONCLICK FUNCTIONS FOR EACH ANSWER
document.getElementById('answerA').onclick = function(index){
  correctAns = qSet[1][5];
  console.log(correctAns +"<--RIGHT ANSWER");
  if(correctAns === answerA.textContent){
    console.log("goodjob");
    startGame();
    playerScore++;
    timeLeft = 45;
    remainingQ--;
    if(remainingQ===0){
      playerName = prompt("Game Over! Enter Name Here!");
      window(playerName + " " + playerScore)
    }
  }
  else{
    console.log("ERRR");
    timeLeft = timeLeft-10;
    timeEl.innerHTML = timeLeft + ' seconds remaining';
  }
}
document.getElementById('answerB').onclick = function(index){
  correctAns = qSet[1][5];
  console.log(correctAns);
  if(correctAns === answerB.textContent){
    console.log("goodjob");
    startGame();
    timeLeft = 45;
    playerScore++;
  }
  else{
    console.log("ERR")
    timeLeft = timeLeft-10;
    timeEl.innerHTML = timeLeft + ' seconds remaining';
  }
}
document.getElementById('answerC').onclick = function(index){
  correctAns = qSet[1][5];
  console.log(correctAns);
  if(correctAns === answerC.textContent){
    console.log("goodjob");
    startGame();
    timeLeft = 45;
    playerScore++;
  }
  else{
    console.log("ERRR")
    timeLeft = timeLeft-10;
    timeEl.innerHTML = timeLeft + ' seconds remaining';
  }
}
document.getElementById('answerD').onclick = function(index){
  correctAns = qSet[1][5];
  console.log(correctAns);
  if(correctAns === answerD.textContent){
    console.log("goodjob");
    startGame();
    timeLeft = 45;
    playerScore++;
  }
  else{
    console.log("ERRRR");
    timeLeft = timeLeft-10;
    timeEl.innerHTML = timeLeft + ' seconds remaining';
  }
}
//setTime()