var randomNumber1= Math.random();
randomNumber1=Math.floor(randomNumber1*6 + 1);


document.querySelector(".item1").setAttribute("src","images/dice"+randomNumber1+".png");

var randomNumber2= Math.random();
randomNumber2=Math.floor(randomNumber2*6 + 1);

document.querySelector(".item2").setAttribute("src","images/dice"+randomNumber2+".png");

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="<em> Player 1 won!! </em>";}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="<em> Player 2 won!! </em>";}
  else{
      document.querySelector("h1").innerHTML="<em> Draw!! </em>";
  }
