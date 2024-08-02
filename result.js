let uname=localStorage.username; //getting username value from localstorage
let heading_ = document.getElementById("name");//assigning it in dom
let correct_answers=document.getElementById("correct")
let percentage=document.getElementById("percentage")
let attempts=document.getElementById("attempts")
let wrong=document.getElementById("wrong")




let attempts_data=localStorage.attempts;
attempts.textContent=`Attempts : ${attempts_data}`
let wrong_ans=localStorage.wrong_ans;
wrong.textContent=`Wrong : ${wrong_ans}`

let lscore=(localStorage.score);//getting score value from localstorage
heading_.textContent=`${uname} your score is : ${lscore*10}`
correct_answers.textContent=`Correct answers : ${lscore}`
percentage.textContent=`Percentage : ${(lscore/10)*100}%`



localStorage.score=0;
localStorage.attempts=0;
localStorage.wrong_ans=0;