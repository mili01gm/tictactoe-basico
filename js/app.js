//Todas las variables.TODAS.
//Para las partidas
var j1 = document.getElementById('j1');
var j2 = document.getElementById('j2');
var j3 = document.getElementById('j3');
var j4 = document.getElementById('j4');
var j5 = document.getElementById('j5');
var j6 = document.getElementById('j6');
var j7 = document.getElementById('j7');
var j8 = document.getElementById('j8');
var j9 = document.getElementById('j9');
//Para los turnos
var turno = false;
var buton = document.getElementsByClassName('buttons');
//var botones = {j1,j2,j3,j4,j5,j6,j7,j8,j9};
var reinicia = document.getElementById('reset');
var symbol = "+";
//Para el score
var xScore = document.getElementById('xScore');
var oScore = document.getElementById('oScore');
var playerX = false;
var playerO = false;
var xWins = 0;
var oWins = 0;


// turnos con .setAttributte() info en https://www.w3schools.com/jsref/met_element_setattribute.asp
function playingTurn(){
  //alert("hola");
  if(turno == false){
    //var i;
    //for(i in botones){i.setAttribute("value","x");}
    this.setAttribute("value","x");
    getWinner();
    turno = true;
    return true;}
  else if(turno == true){
    this.setAttribute("value","o");
    getWinner();
    turno = false;
  }
}

//Se llama a cada turno
for(var i = 0; i < buton.length; i+=1){
  buton[i].addEventListener('click',playingTurn);
}

//TODAS las posibles partidas. En principio.
function getWinner(){
  if(((j1.value == "x") && (j2.value == "x") && (j3.value == "x"))||
     ((j4.value == "x") && (j5.value == "x") && (j6.value == "x"))||
     ((j7.value == "x") && (j8.value == "x") && (j9.value == "x"))||
     ((j1.value == "x") && (j4.value == "x") && (j7.value == "x"))||
     ((j2.value == "x") && (j5.value == "x") && (j8.value == "x"))||
     ((j3.value == "x") && (j6.value == "x") && (j9.value == "x"))||
     ((j1.value == "x") && (j5.value == "x") && (j9.value == "x"))||
     ((j3.value == "x") && (j5.value == "x") && (j7.value == "x"))){
       alert("El jugador X gana!");
       playerX = true;
       gameScore();
       return true;
     }
    if((j1.value == "o" && j2.value == "o" && j3.value == "o")||
       (j4.value == "o" && j5.value == "o" && j6.value == "o")||
       (j7.value == "o" && j8.value == "o" && j9.value == "o")||
       (j1.value == "o" && j4.value == "o" && j7.value == "o")||
       (j2.value == "o" && j5.value == "o" && j8.value == "o")||
       (j3.value == "o" && j6.value == "o" && j9.value == "o")||
       (j1.value == "o" && j5.value == "o" && j9.value == "o")||
       (j3.value == "o" && j5.value == "o" && j7.value == "o")){
         alert("El jugador O gana!");
         playerO = true;
         gameScore();
         return true;
       }
    if((j1.value=="x" || j1.value=="o")&&
            (j2.value=="x" || j2.value=="o")&&
			      (j3.value=="x" || j3.value=="o")&&
            (j4.value=="x" || j4.value=="o")&&
            (j5.value=="x" || j5.value=="o")&&
            (j6.value=="x" || j6.value=="o")&&
            (j7.value=="x" || j7.value=="o")&&
            (j8.value=="x" || j8.value=="o")&&
            (j9.value=="x" || j9.value=="o")){
                alert("Es un empate :(");
                return true;
            }
}

// Se guarda la partida ganada en el span.
function gameScore(){
		if(playerX === true){
      xWins++; xScore.innerHTML = xWins;}
    if(playerO === true){
      oWins++; oScore.InnerHTML = oWins;}
}

function playAgain(){
  "use strict";
  j1.setAttribute("value",symbol);
  j2.setAttribute("value",symbol);
  j3.setAttribute("value",symbol);
  j4.setAttribute("value",symbol);
  j5.setAttribute("value",symbol);
  j6.setAttribute("value",symbol);
  j7.setAttribute("value",symbol);
  j8.setAttribute("value",symbol);
  j9.setAttribute("value",symbol);
}
reset.addEventListener("click",playAgain);
