let questions;
let q=document.getElementById("question");
let qcount=document.getElementById("q_count")
let category=document.getElementById("category")
let submit=document.getElementById("next");
let final_submit=document.getElementById("sub");
let countdown=document.getElementById("countdown");
let option1=document.getElementById("option1");
let option2=document.getElementById("option2")
let option3=document.getElementById("option3")
let option4=document.getElementById("option4")
let time=0;
let count=0;
let timer_c=true
let is_last_question=false;
let interval;
let score=0;
let attempts=0;
let wrong_ans=0;
let d=localStorage.getItem("a");

localStorage.focus_option="";

let film_options=[
    { 
        question:"1.In The Matrix, does Neo take the blue pill or the red pill?",
        option1:"Blue",
        option2:"Purple",
        option3:"Red",
        option4:"Black",
        correct_option:"Red"
    },
    { 
        question:"The head of what kind of animal is front-and-center in an infamous scene from The Godfather?",
        option1:"Lion",
        option2:"Camel",
        option3:"Bull",
        option4:"Horse",
        correct_option:"Horse"
    },
    { 
        question:"Who played Tony Stark role in Marvel?",
        option1:"Robert downey jr",
        option2:"Tom Cruise",
        option3:"Chris Hemsworth",
        option4:"Robert Atkinson",
        correct_option:"Robert downey jr"
    },
    { 
        question:"What Hollywood movie star plays himself in Zombieland?",
        option1:"Tom Hanks",
        option2:"Dwayane Johnson",
        option3:"Bill Murray",
        option4:"Christofer Nolan",
        correct_option:"Bill Murray"
    },
    { 
        question:"How many suns does Luke's home planet of Tatooine have in Star Wars?",
        option1:"1",
        option2:"2",
        option3:"3",
        option4:"4",
        correct_option:"2"
    },
    { 
        question:"Who sang the song “Tum Hi Ho” from the film “Aashiqui 2”?",
        option1:"Atif aslam",
        option2:"kailash khair",
        option3:"Arijit singh",
        option4:"jubin nautiyal",
        correct_option:"Arijit singh"
    },
    { 
        question:"Which was the first Bollywood film to gross over Rs. 100 crore at the box office?",
        option1:"Ghajini",
        option2:"Kaabil",
        option3:"Don",
        option4:"Pathan",
        correct_option:"Ghajini"
    },
    { 
        question:"Who directed the film “Zindagi Na Milegi Dobara”?",
        option1:"Karan johar",
        option2:"Zoya Akhtar",
        option3:"Yash chopra",
        option4:"sanjay leela bansali",
        correct_option:"Zoya Akhtar"
    },
    { 
        question:"Who played the role of “Mogambo” in the movie “Mr. India”?",
        option1:"Amjad khan",
        option2:"Anupam khair",
        option3:"sanjay dutt",
        option4:"Amrish Puri",
        correct_option:" "
    },
    { 
        question:"Who played the role of “Munna Bhai” in the film “Munna Bhai M.B.B.S.”?",
        option1:"Amir khan",
        option2:"Sanjay dutt",
        option3:"Arshad warsi",
        option4:"Akshay Kumar",
        correct_option:"Sanjay dutt"
    },
    { 
        question:"Who is known as father of Indian cinema?",
        option1:"V shantaram",
        option2:"Prithviraj Kapoor",
        option3:"Dadasaheb Falke",
        option4:"Kamal Hasan",
        correct_option:"Dadasaheb Falke"
    },
]

let gk_options=[
    {
        question:"1.Who created Bitcoin?",
        option1:"Vitalik Buterin",
        option2:"Changpen Zhao",
        option3:"Satoshi Nakamoto",
        option4:"Billy Markus",
        correct_option:"Satoshi Nakamoto"
    },
    {
        question:"2.Which is the richest state in India?",
        option1:"Maharashtra",
        option2:"Punjab",
        option3:"Uttar Pradesh",
        option4:"Madhya Pradesh",
        correct_option:"Maharashtra"
    },
    {
        question:"3.What is the capital of India?",
        option1:"Delhi",
        option2:"Mumbai",
        option3:"Kolkata",
        option4:"Chennai",
        correct_option:"Delhi"
    },
    {
        question:"4.What is the currency of India?",
        option1:"Rupee",
        option2:"Euro",
        option3:"Dinar",
        option4:"Pound",
        correct_option:"Rupee"
    },
    {
        question:"5.Where is India’s Silicon Valley located?",
        option1:"Chennai",
        option2:"Mumbai",
        option3:"Kolkata",
        option4:"Banglore",
        correct_option:"Banglore"
    },
    {
        question:"6.What is the national flower of India?",
        option1:"Rose",
        option2:"Sunflower",
        option3:"Lotus",
        option4:"Lili",
        correct_option:"Lotus"
    },
    {
        question:"7.Who is the current President of India?",
        option1:"Dr.Rajendra Prasad",
        option2:"Ramnath Kovind",
        option3:"Narendra Modi",
        option4:"Droupadi murmu",
        correct_option:"Droupadi murmu"
    },
    {
        question:"8.What is the current inflation rate in India?",
        option1:"5.08%",
        option2:"9.68%",
        option3:"20.3%",
        option4:"15.6%",
        correct_option:"5.08%"
    },
    {
        question:"9.What is the national sport of India?",
        option1:"Hocky",
        option2:"Cricket",
        option3:"Football",
        option4:"Kabaddi",
        correct_option:"Hocky"
    },
    {
        question:"10.Which vitamins help in the clotting of blood?",
        option1:"A",
        option2:"C",
        option3:"K",
        option4:"E",
        correct_option:"K"
    },
]
let music_options=[
    {
        question:"1.Which of these music genres is usually not played in India?",
        option1:"Indian blues",
        option2:"Indian rock",
        option3:"filmi",
        option4:"folk",
        correct_option:"Indian rock"
    },
    {
        question:"2.Which Indian actor makes a cameo appearance in the original music video of Adnan Sami's Lift Karade song?",
        option1:"Amitabh",
        option2:"Govinda",
        option3:"Akshay Kumar",
        option4:" Sanjay Dutt",
        correct_option:"Govinda"
    },
    {
        question:"3.Movie music in India is made for the Indian movie industry. What is the Indian movie industry called?",
        option1:"Indiawood",
        option2:"Hollywood",
        option3:"Tollywood",
        option4:"Bollywood",
        correct_option:"Bollywood"
    },
    {
        question:"4.Garba is a dance that goes along with some types of Indian music. It often consists of partners dancing together with sticks, and is popular at traditional weddings. What state in India did Garba originate from?",
        option1:"Maharashtra",
        option2:"Goa",
        option3:"Gujrat",
        option4:"Keral",
        correct_option:"Gujrat"
    },
    {
        question:"5.Which is an Indian string instrument?",
        option1:"Guitar",
        option2:"Sitar",
        option3:"Piano",
        option4:"Violin",
        correct_option:"Sitar"
    },
    {
        question:"6.What material is the Indian flute made of?",
        option1:"Wood",
        option2:"String",
        option3:"Metal",
        option4:"Plastic",
        correct_option:"Wood"
    },
    {
        question:"7.Which instrument does Zakir Hussain play?",
        option1:"vocals",
        option2:"violin",
        option3:"Tabla",
        option4:"sitar",
        correct_option:"Tabla"
    },
    {
        question:"8.What is the tune of the song called?",
        option1:"Pallavi",
        option2:"Tanam",
        option3:"Ragam",
        option4:"Charanam",
        correct_option:"Ragam"
    },
    {
        question:"9.What is the beat called?",
        option1:"Rangjam",
        option2:"Talam",
        option3:"Nadanam",
        option4:"Charanam",
        correct_option:"Talam"
    },
    {
        question:"10.By popular belief, Tabla was invented in which province of India?",
        option1:"Bengal",
        option2:"punjab",
        option3:"Karnataka",
        option4:"Madhypradesh",
        correct_option:"Punjab"
    },
]

let sports_options=[
    {
        question:"1.Who captained India to its first-ever Cricket World Cup victory in 1983?",
        option1:"A) Kapil Dev",
        option2:"B) Sunil Gavaskar",
        option3:"C) Sachin Tendulkar",
        option4:"D) Sourav Ganguly",
        correct_option:"A) Kapil Dev",
    },
    {
        question:"2. Which Indian badminton player became the first Indian to win an Olympic medal in the sport?",
        option1:"A) Kidambi Srikanth",
        option2:"B) PV Sindhu",
        option3:"C) Saina Nehwal",
        option4:"D) Prakash Padukone",
        correct_option:"C) Saina Nehwal",
    },
    {
        question:"3. Which city hosted the iconic 2011 Cricket World Cup final between India and Sri Lanka?",
        option1:"A) Mumbai",
        option2:"B) Kolkata",
        option3:"C) Chennai",
        option4:"D) Delhi",
        correct_option:"A) Mumbai",
    },
    {
        question:"4. Who was the first Indian cricketer to score a double century in ODI?",
        option1:"A) Sunil Gavaskar",
        option2:"B) Sachin Tendulkar",
        option3:"C) Virender Sehwag",
        option4:"D) Kapil Dev",
        correct_option:"B) Sachin Tendulkar",
    },
    {
        question:"5. Who is the only Indian male boxer to win a medal at the Olympics?",
        option1:"A) Manoj Kumar",
        option2:"B) Mary Kom",
        option3:"B) Mary Kom",
        option4:"D) Vijender Singh ",
        correct_option:"D) Vijender Singh ",
    },
    {
        question:"6. Which Indian chess player holds the prestigious title of Grandmaster?",
        option1:"a) Viswanathan Anand",
        option2:"b) Harikrishna Koneru",
        option3:"c) Pentala Harikrishna",
        option4:"d) Adhiban Baskaran",
        correct_option:"a) Viswanathan Anand",
    },
    {
        question:"7. Which Indian athlete is known as the `Flying` Sikh for his exceptional speed in athletics?",
        option1:"A) PT Usha",
        option2:"B) Manoj Tiwari",
        option3:"C) Neeraj Chopra",
        option4:"D) Milkha Singh",
        correct_option:"D) Milkha Singh",
    },
    {
        question:"8. Who is the youngest Indian woman to climb Mount Everest?",
        option1:"A) Arunima Sinha",
        option2:"B) Malavath Poorna",
        option3:"C) Bachendri Pal",
        option4:"D) Jyoti Ratre",
        correct_option:"C) Bachendri Pal",
    },
    {
        question:"4. India first won the Olympic Gold Medal in Hockey in which year?",
        option1:"A) 1988",
        option2:"B) 2002",
        option3:"C) 1954",
        option4:"D) 1928",
        correct_option:"D) 1928",
    },
    {
        question:"In which stadium sachin tendulkar completed his 100th century?",
        option1:"A) Eden Gardens",
        option2:"B) Shere Bangla Stadium",
        option3:"C) Firoz Shah Kotla Ground",
        option4:"D) wankhede",
        correct_option:"B) Shere Bangla Stadium",
    },
    
]


document.addEventListener("DOMContentLoaded", () => {
    timer()
    
    if(d==0){category.textContent="General Knowledge";
         questions=gk_options;
    }
    else if(d==1){category.textContent="Music";
        questions=music_options;
    }
    else if(d==2){category.textContent="Sports"
        questions=sports_options;
    }
    else if(d==3){category.textContent="Film"
        questions=film_options;
    }
    
    qcount.textContent=`${count+1}/10`;
    q.textContent=questions[0].question;
    option1.textContent=questions[0].option1;
    option2.textContent=questions[0].option2;
    option3.textContent=questions[0].option3;
    option4.textContent=questions[0].option4;
    
});

option1.addEventListener("click",()=>{
    localStorage.focus_option=option1.textContent
})
option2.addEventListener("click",()=>{
    localStorage.focus_option=option2.textContent
})
option3.addEventListener("click",()=>{
    localStorage.focus_option=option3.textContent
})
option4.addEventListener("click",()=>{
    localStorage.focus_option=option4.textContent
})

function next(){
    if(localStorage.focus_option==questions[count].correct_option && localStorage.focus_option!=""){
         score=score+1;
         attempts+=1;
         localStorage.attempts=attempts
        localStorage.score=score;
        localStorage.focus_option="";
    }
    else if(localStorage.focus_option!=questions[count].correct_option && localStorage.focus_option!=""){
       attempts+=1;
       wrong_ans+=1;
       localStorage.attempts=attempts;
       localStorage.wrong_ans=wrong_ans
       localStorage.focus_option="";
    }
    
    clearInterval(interval)
    timer()

if(count==8){
   is_last_question=true;
    count++;
    q.textContent=questions[count].question
     qcount.textContent=`${count+1}/10`;
     option1.textContent=questions[count].option1;
     option2.textContent=questions[count].option2;
     option3.textContent=questions[count].option3;
     option4.textContent=questions[count].option4;
     submit.style.display="none";
     final_submit.style.display="block";
    }
else if(count<8)
    {
    count++;
    qcount.textContent=`${count+1}/10`
    q.textContent=questions[count].question;
    option1.textContent=questions[count].option1;
     option2.textContent=questions[count].option2;
     option3.textContent=questions[count].option3;
     option4.textContent=questions[count].option4;
    }

}

function last_submit_button(){
    if(localStorage.focus_option==questions[count].correct_option && localStorage.focus_option!=""){
        score=score+1;
        attempts+=1;
       localStorage.score=score;
       localStorage.wrong_ans=wrong_ans
   } 
   else if(localStorage.focus_option!=""){
    attempts+=1;
    wrong_ans+=1;
    localStorage.attempts=attempts;
    localStorage.wrong_ans=wrong_ans
 
 }
}

function timer(){
    let t=15;
    time=t;
    interval=setInterval(() => {
        if(t>0){
            countdown.textContent=` ${t} sec`
             t--;
        }
        else if(t==0){
            
            if(is_last_question==true){
            window.location.href = "./result.html";
            
            }
            next()
        }
         }, 1000);
   
        
   
}



window.onload=()=>{
    localStorage.score=0;
    localStorage.wrong_ans=0;
    localStorage.attempts=0;
    localStorage.time=0;
}
