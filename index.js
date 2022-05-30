var randomNumber1=Math.floor(Math.random()*6)+1;
var ran="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",ran);

var rannum2=Math.floor(Math.random()*6)+1;
var ran2="images/dice"+rannum2+".png";
document.querySelector(".img2").setAttribute("src",ran2);

if(ran>ran2){
  document.querySelector("h1").innerHTML="Player1 Wins 🏴";

}
else if(ran<ran2){
  document.querySelector("h1").innerHTML="Player2 Wins 🏁";
}
else{
    document.querySelector("h1").innerHTML="It's a draw !!";
}
