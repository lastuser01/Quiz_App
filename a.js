
let heading=document.getElementById("heading");
let input=document.getElementById("input");
let username;
let a='';
let name_entered=false
let gk_link=document.getElementById("gk_link")
let music_link=document.getElementById("music_link")
let film_link=document.getElementById("film_link")
let sports_link=document.getElementById("sports_link")




function gello(){
    if(input.value==""){
        alert("please Enter your name ")
        }
        else{
            name_entered=true;
            a=input.value;
            localStorage.username=a
            let s=a.indexOf(" ");
            if(s<1){
                heading.textContent=`Hello ${a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()}!`
                input.value="";
            }
            else{
                heading.textContent=`Hello ${a.charAt(0).toUpperCase()+a.slice(1,s).toLowerCase()} ${a.charAt(s+1).toUpperCase()+a.slice(s+2).toLowerCase()}!`
                input.value="";
            }
            
            
        }
   
}


function gk_in(){

    if(name_entered==true){
        localStorage.a=0;
        gk_link.href="./main.html"
    }
    else{
        alert("please Enter your name ")
    }
    
   
   
}
function music_in(){
    if(name_entered==true){
        localStorage.a=1;
        music_link.href="./main.html"
    }
    else{
        alert("please Enter your name ")
    }
    
}
function sports_in(){
    if(name_entered==true){
        localStorage.a=2;
        sports_link.href="./main.html"
    }
    else{
        alert("please Enter your name ")
    }
    
}
function film_in(){
    if(name_entered==true){
        localStorage.a=3;
        film_link.href="./main.html"
    }
    else{
        alert("please Enter your name ")
    }
    
}



