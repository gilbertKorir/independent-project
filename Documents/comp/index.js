function check(){
    var c = 0;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var result=document.getElementById('result');
    var quiz = document.getElementById('quiz')
    if(q1 == "compiler"){c++}
    if(q2 == "PHP"){c++}
    if(q3 == "Syntax"){c++}
    if(q4 == ".NET"){c++}
    if(q5 == "IDE"){c++}

    quiz.style.display = "none";
    var finalAnswer = c*20;
    if(finalAnswer >= 80){
        result.textContent = "Your Score is: " + finalAnswer +"%"+" EXCELLENT!";
    }
    else if(finalAnswer>=50&&finalAnswer<80){
        result.textContent = "Your Score is: " + finalAnswer +"%"+" FAIRLY DONE!";
    }
    else if(finalAnswer<50){
        result.textContent = "Your Score is: " + finalAnswer +"%"+" POORLY DONE! Repeat the TEST";
    }
}