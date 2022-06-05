var qSet = [
["Here is the Question", "Wrong", "Right", "Wrong", "Wrong", 3],
["Heres Another Q", "Answer", "Answer", "Wrong", "Answer"]
];//Questons
  // light theme state
var index
var startB = document.getElementById("startB")
var question = document.getElementById("questionLine")
var answerA = document.getElementById("answerA")
var answerB = document.getElementById("answerB")
var answerC = document.getElementById("answerC")
var answerD = document.getElementById("answerD")
var timeEl = document.getElementById("timer")
// Click event causes alert "Hello World"
// Vanilla JS equivalent: `addEventListener`
// alertButtonEl.on('click', function () {
//   alert('Hello World');
// });
function startGame(){//Start Game, Timer gets set, Question gets set.
  document.querySelector(".question").style.display = "block";
  document.querySelector("#QuizCard").style.display = "none";
  setTime();
  displayQ(QIndex());
}
function chooseQ(){
  QIndex = Math.floor(math.random()* questionsArray.length);
  console.log(QIndex);
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
  return(index)
  //console.log(question+","+answerA+","+answerB+","+answerC+","+answerD);
}

function setTime() { //Timer Function
  secondsLeft = 30;
  timerInterval = setInterval(function(){
    secondsLeft--;
    timeEl.textContent = "You have "+secondsLeft+" seconds left!"
    if (secondsLeft === 0){
      clearInterval(timerInterval);
      timeUp();
    }
  }, 1000);
}
displayQ(chooseQ)


document.getElementById('answerC').onclick = function(index){
  correct = qSet[index][5];
  console.log(correct);
  if(correct === answerC.textContent){
    alert("Answer C is Correct")
  }
  else
  {
    alert("WRONG, YA SHIT")
  }
}
//setTime()